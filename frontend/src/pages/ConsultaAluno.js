import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Field from "../components/Field";
import ModalAluno from "../components/ModalAluno";
import ModalExcluirAluno from "../components/ModalExcluirAluno";
import "../styles/ConsultaAluno.css";
import { getGroupAll } from "../endpoints/groups.js";
import { getStudents } from "../endpoints/students.js"; // Importe a função getStudents
import ModalVisualizarAluno from "../components/ModalVisualizarAluno";
import ModalEditAluno from "../components/ModalEditAluno";

function ConsultaAluno() {
  const [options, setOptions] = useState([{ value: "", label: "" }]);
  const [groups, setGroups] = useState("");
  const [students, setStudents] = useState([]); // Estado para armazenar os alunos
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

  useEffect(() => {
    fetchGroups();
  }, []);

  const searchStudents = async () => {
    try {
      const response = await getStudents("", groups);
      setStudents(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewClick = (student) => {
    setSelectedStudent(student);
    setShowViewModal(true);
  };

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setShowEditModal(true);
  };

  const handleDeleteClick = (student) => {
    setSelectedStudent(student);
    setShowDeleteModal(true);
  };

  const handleShowViewModal = () => {
    setShowViewModal(true);
  };

  const handleCloseViewModal = () => {
    setShowViewModal(false);
  };

  const handleShowEditModal = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    fetchGroups();
  };

  return (
    <div className="consultaAluno">
      <Navbar />
      <div className="content">
        <h1 className="title">Consulta de Alunos</h1>
        <Field
          id="nome"
          label="Nome"
          type="text"
          placeholder="Digite o nome do aluno"
        />
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
          onClick={searchStudents} // Adicione o evento onClick para chamar a função de pesquisa
        >
          <i className="fas fa-search"></i> Pesquisar
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Matrícula</th>
              <th scope="col">Aluno</th>
              <th scope="col">Data de Nascimento</th>
              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.registration}>
                  <th scope="row">{student.id}</th>
                  <td>{student.full_name}</td>
                  <td>
                    {new Date(
                      `${student.date_of_birth}T12:00:00`
                    ).toLocaleDateString("pt-BR")}
                  </td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => handleViewClick(student)}
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEditClick(student)}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteClick(student)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
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
      </div>
      <ModalVisualizarAluno
        show={showViewModal}
        student={selectedStudent}
        handleOpen={handleShowViewModal}
        handleClose={handleCloseViewModal}
      />

      <ModalEditAluno
        show={showEditModal}
        student={selectedStudent}
        handleOpen={handleShowEditModal}
        handleClose={handleCloseEditModal}
      />
      <ModalExcluirAluno />
    </div>
  );
}

export default ConsultaAluno;
