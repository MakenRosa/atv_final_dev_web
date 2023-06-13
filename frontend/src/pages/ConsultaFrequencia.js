import React from "react";
import Navbar from "../components/Navbar";
import FieldTurma from "../components/FieldTurma";
import ModalEditFrequencia from "../components/ModalEditFrequencia";
import "../styles/ConsultaFrequencia.css";
import { useState, useEffect } from "react";
import { getGroupAll } from "../endpoints/groups.js";
import ModalMessage from "../components/ModalMessage";
import { getGroup } from "../endpoints/groups.js";

function ConsultaFrequencia() {
  const [options, setOptions] = useState([{ value: "", label: "" }]);
  const [groups, setGroups] = useState("");
  const [students, setStudents] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const groupData = await getGroupAll();
        setOptions(
          groupData.map((group) => ({ value: group.id, label: group.name }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchGroups();
  }, []);

  const searchStudents = async () => {
    if (groups === "") {
      setModalTitle("Erro");
      setModalMessage("Por favor selecione uma turma.");
      setModalShow(true);
      return;
    }
    try {
      const response = await getGroup(groups);
      setStudents(response.group_student);
      setModalTitle("Pesquisa realizada");
      setModalMessage("A pesquisa de alunos foi realizada com sucesso.");
      setModalShow(true);
    } catch (error) {
      console.log(error);
      setModalTitle("Erro");
      setModalMessage("Ocorreu um erro ao realizar a pesquisa de alunos.");
      setModalShow(true);
    }
  };

  return (
    <div className="consultaFrequencia">
      <Navbar />
      <div className="content">
        <h1 className="title">Consulta de Frequência</h1>
        <div className="line">
          <div>
            <label className="FieldTurma" htmlFor="turma">
              Turma
            </label>
            <select
              id="turma"
              className="form-controlfield-turma"
              value={groups}
              onChange={(event) => setGroups(event.target.value)}
            >
              <option value="">Selecione uma turma</option>
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={searchStudents}
          >
            <i className="fas fa-search"></i> Pesquisar
          </button>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Matrícula</th>
              <th scope="col">Aluno</th>
              <th scope="col">Faltas</th>
              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={student.id}>
                  <th scope="row">{student.student.id}</th>
                  <td>{student.student.full_name}</td>
                  <td>
                    {student.attendances.reduce(
                      (accumulator, attendance) =>
                        accumulator + attendance.attendance,
                      0
                    )}
                  </td>
                  <td></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Nenhum aluno encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ModalMessage
        show={modalShow}
        onClose={() => setModalShow(false)}
        title={modalTitle}
        message={modalMessage}
      />
    </div>
  );
}

export default ConsultaFrequencia;
