import React from "react";
import Navbar from "../components/Navbar";
import "../components/ModalEditNota";
import "../styles/ConsultaNota.css";
import { useState, useEffect } from "react";
import { getGroupAll } from "../endpoints/groups.js";
import { getGroup } from "../endpoints/groups.js";
import ModalMessage from "../components/ModalMessage";
import ModalEditNota from "../components/ModalEditNota";

function ConsultaNota() {
  const [options, setOptions] = useState([{ value: "", label: "" }]);
  const [groups, setGroups] = useState("");
  const [students, setStudents] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [scoreArrays, setScoreArrays] = useState([]);

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

  const calculateAverage = (arr) => {
    if (!arr || arr.length === 0) {
      return null;
    }
    let filteredArr = arr.filter((item) => item != null);
    if (filteredArr.length === 0) {
      return null;
    }
    let sum = filteredArr.reduce((a, b) => a + b, 0);
    let avg = sum / filteredArr.length;
    return avg;
  };

  const parseScoreArrays = (group_student) => {
    let maxScoreLength = Math.max(
      ...group_student.map((studentGroup) => studentGroup.scores.length)
    );
    let scoresArray = group_student.map((studentGroup) => {
      let scores = studentGroup.scores.map((scoreObj) =>
        parseFloat(scoreObj.score)
      );
      while (scores.length < maxScoreLength) {
        scores.push(null);
      }
      return scores;
    });
    return scoresArray;
  };

  const searchStudents = async (displayMessage) => {
    if (groups === "") {
      setModalTitle("Erro");
      setModalMessage("Por favor selecione uma turma.");
      setModalShow(true);
      return;
    }
    try {
      const response = await getGroup(groups);
      setStudents(response.group_student);
      setSelectedGroup({
        id: response.id,
        name: response.name,
        date: response.date,
      });
      setScoreArrays(parseScoreArrays(response.group_student));
      if (displayMessage) {
        setModalTitle("Pesquisa realizada");
        setModalMessage("A pesquisa de alunos foi realizada com sucesso.");
        setModalShow(true);
      }
    } catch (error) {
      console.log(error);
      setModalTitle("Erro");
      setModalMessage("Ocorreu um erro ao realizar a pesquisa de alunos.");
      setModalShow(true);
    }
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    searchStudents(false);
  };

  const handleShowEditModal = () => {
    setShowEditModal(true);
  };

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    handleShowEditModal();
  };

  return (
    <div className="consultaNota">
      <Navbar />
      <div className="content">
        <h1 className="title">Consulta de Notas</h1>
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
            {students.length > 0 && scoreArrays.length > 0 ? (
              <tr>
                <th scope="col">Matrícula</th>
                <th scope="col">Aluno</th>
                {scoreArrays[0].map((score, index) => (
                  <th scope="col" key={index}>
                    Nota {index + 1}
                  </th>
                ))}
                <th scope="col">Média</th>
                <th scope="col">Opções</th>
              </tr>
            ) : (
              <tr>
                <th scope="col">Matrícula</th>
                <th scope="col">Aluno</th>
                <th scope="col">Nota 1</th>
                <th scope="col">Nota 2</th>
                <th scope="col">Nota 3</th>
                <th scope="col">Média</th>
                <th scope="col">Opções</th>
              </tr>
            )}
          </thead>
          <tbody>
            {students.length > 0 && scoreArrays.length > 0 ? (
              students.map((student, studentIndex) => (
                <tr key={student.student.id}>
                  <td scope="row">{student.student.id}</td>
                  <td>{student.student.full_name}</td>
                  {scoreArrays[studentIndex].map((score, scoreIndex) => (
                    <td key={scoreIndex}>
                      {score != null ? score.toFixed(2) : ""}
                    </td>
                  ))}
                  <td>
                    {calculateAverage(scoreArrays[studentIndex]) != null
                      ? calculateAverage(scoreArrays[studentIndex]).toFixed(2)
                      : ""}
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEditClick(student)}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">Nenhum aluno encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ModalEditNota
        selectedGroup={selectedGroup}
        show={showEditModal}
        student={selectedStudent}
        handleOpen={handleShowEditModal}
        handleClose={handleCloseEditModal}
      />
      <ModalMessage
        show={modalShow}
        onClose={() => setModalShow(false)}
        title={modalTitle}
        message={modalMessage}
      />
    </div>
  );
}

export default ConsultaNota;
