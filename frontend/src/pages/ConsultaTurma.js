import Navbar from "../components/Navbar";
import ModalEditTurma from "../components/ModalEditTurma";
import ModalVisualizarTurma from "../components/ModalVisualizarTurma";
import "../styles/ConsultaTurma.css";
import React, { useState, useEffect } from "react";
import { getGroupAll } from "../endpoints/groups.js";

function ConsultaTurma() {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const fetchGroups = async () => {
    const groupData = await getGroupAll();
    setGroups(groupData);
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const handleViewClick = (group) => {
    setSelectedGroup(group);
    setShowViewModal(true);
  };

  const handleEditClick = (group) => {
    setSelectedGroup(group);
    setShowEditModal(true);
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
    <div className="consultaTurma">
      <Navbar />
      <div className="content">
        <h1 className="title">Consulta de Turmas</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Turma</th>
              <th scope="col">Data da Turma</th>
              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            {groups.length > 0 ? (
              groups.map((group, index) => (
                <tr key={index}>
                  <th scope="row">{group.name}</th>
                  <td>
                    {new Date(`${group.date}T12:00:00`).toLocaleDateString(
                      "pt-BR"
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => handleViewClick(group)}
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEditClick(group)}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">Nenhum dado encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ModalVisualizarTurma
        show={showViewModal}
        group={selectedGroup}
        handleOpen={handleShowViewModal}
        handleClose={handleCloseViewModal}
      />
      <ModalEditTurma
        show={showEditModal}
        group={selectedGroup}
        handleOpen={handleShowEditModal}
        handleClose={handleCloseEditModal}
      />
    </div>
  );
}

export default ConsultaTurma;
