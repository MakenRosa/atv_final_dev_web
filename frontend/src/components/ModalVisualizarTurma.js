import React, { useState, useEffect } from "react";
import Field from "./Field";
import ModalComponent from "./ModalComponent";
import { ModalFooter } from "react-bootstrap";
import { getGroup } from "../endpoints/groups.js";

const ModalVisualizarTurma = ({ show, group, handleClose }) => {
  const [groupDetails, setGroupDetails] = useState(null);

  useEffect(() => {
    if (show && group) {
      const fetchGroupDetails = async () => {
        const details = await getGroup(group.id);
        setGroupDetails(details);
      };
      fetchGroupDetails();
    } else {
      setGroupDetails(null);
    }
  }, [show, group]);

  return groupDetails ? (
    <ModalComponent show={show} title="Visualizar Turma" onClose={handleClose}>
      <Field
        id="nomeTurma"
        label="Nome da Turma"
        type="text"
        disabled={true}
        value={groupDetails.name}
      />
      <Field
        id="dataTurma"
        label="Data da Turma"
        type="date"
        disabled={true}
        value={groupDetails.date}
      />
      <div>
        <h2>Alunos</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Matrícula</th>
              <th scope="col">Aluno</th>
            </tr>
          </thead>
          <tbody>
            {groupDetails.group_student ? (
              groupDetails.group_student.map((student, index) => (
                <tr key={index}>
                  <th scope="row">{student.student.id}</th>
                  <td>{student.student.full_name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">Nenhum aluno matriculado</td>
              </tr>
            )}
          </tbody>
        </table>
        <ModalFooter>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClose}
          >
            Ok
          </button>
        </ModalFooter>
      </div>
    </ModalComponent>
  ) : null;
};

export default ModalVisualizarTurma;
