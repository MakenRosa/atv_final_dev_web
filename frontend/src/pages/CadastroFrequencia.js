import React from "react";
import Navbar from "../components/Navbar";
import "../styles/CadastroFrequencia.css";
import { useState, useEffect } from "react";
import { getGroupAll } from "../endpoints/groups.js";
import { getGroup } from "../endpoints/groups.js";
import { setAttendance } from "../endpoints/attendance.js";
import ModalMessage from "../components/ModalMessage";
import Field from "../components/Field";

function CadastroFrequencia() {
  const [options, setOptions] = useState([{ value: "", label: "" }]);
  const [groups, setGroups] = useState("");
  const [students, setStudents] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [date, setDate] = useState("");

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

  const handleSubmit = async (event) => {
    if (!date) {
      setModalTitle("Erro");
      setModalMessage("Por favor, preencha a data.");
      setModalShow(true);
      return;
    }

    const studentsRequest = [];
    students.map((student) => {
      if (student.attendance === false) {
        studentsRequest.push({
          student_group: student.id,
          attendance: 1,
        });
      } else {
        studentsRequest.push({
          student_group: student.id,
          attendance: 0,
        });
      }
    });
    if (studentsRequest.length === 0) {
      setModalTitle("Erro");
      setModalMessage("Por favor selecione uma turma.");
      setModalShow(true);
      return;
    }
    try {
      await Promise.all(
        studentsRequest.map((student) =>
          setAttendance(student.attendance, student.student_group, date)
        )
      );
      setModalTitle("Frequência Salva");
      setModalMessage("A frequência dos alunos foi salva com sucesso.");
      setModalShow(true);
      setStudents([]);
      setDate("");
      setGroups("");
    } catch (error) {
      console.log(error);
      setModalTitle("Erro");
      setModalMessage("Ocorreu um erro ao salvar a frequência dos alunos.");
      setModalShow(true);
    }
  };

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
    <div className="cadastroFrequencia">
      <Navbar />
      <div className="content">
        <h1 className="title">Cadastro de Frequência</h1>
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
        <Field
          label="Data da Frequência"
          type="date"
          placeholder="Digite a data da frequência"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={searchStudents}
        >
          <i className="fas fa-search"></i> Pesquisar
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Matrícula</th>
              <th scope="col">Aluno</th>
              <th scope="col">Presença</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={student.id}>
                  <th scope="row">{student.student.id}</th>
                  <td>{student.student.full_name}</td>
                  <td>
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      id={`presenca${student.id}`}
                      onChange={(e) => {
                        let newStudents = [...students];
                        if (e.target.checked) {
                          newStudents[index].attendance = true;
                        } else {
                          newStudents[index].attendance = false;
                        }
                        setStudents(newStudents);
                      }}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Nenhum aluno encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Salvar
        </button>
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

export default CadastroFrequencia;
