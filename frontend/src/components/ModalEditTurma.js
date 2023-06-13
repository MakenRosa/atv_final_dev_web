import Field from "./Field";
import ModalComponent from "./ModalComponent";
import { ModalFooter, Alert } from "react-bootstrap";
import { updateGroup } from "../endpoints/groups.js";
import React, { useState, useEffect } from "react";

const ModalEditTurma = ({ show, group, handleOpen, handleClose }) => {
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);
  const [id, setId] = useState(null);
  const [alertType, setAlertType] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    if (group) {
      setName(group.name);
      setDate(group.date);
      setId(group.id);
      setAlertType(null);
      setAlertMessage(null);
    }
  }, [group]);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (!name || !date) {
      setAlertType("danger");
      setAlertMessage("Por favor, preencha todos os campos.");
      return;
    }
    try {
      const response = await updateGroup({ id, name, date });
      if (response.ok) {
        setAlertType("success");
        setAlertMessage("A turma foi editada com sucesso!");
      } else {
        setAlertType("danger");
        setAlertMessage("Ocorreu um erro ao editar a turma.");
      }
    } catch (error) {
      setAlertType("danger");
      setAlertMessage("Ocorreu um erro ao editar a turma.");
    }
  };

  return group ? (
    <ModalComponent
      title="Editar Turma"
      show={show}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
      <div>
        {alertType && alertMessage && (
          <Alert variant={alertType}>{alertMessage}</Alert>
        )}
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <Field
              id="nomeTurma"
              label="Nome da Turma"
              type="text"
              placeholder="Digite o nome da turma"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Field
              id="dataTurma"
              label="Data da Turma"
              type="date"
              placeholder="Digite a data da turma"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <ModalFooter>
            <button type="submit" className="btn btn-warning">
              Salvar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleClose}
            >
              Fechar
            </button>
          </ModalFooter>
        </form>
      </div>
    </ModalComponent>
  ) : null;
};

export default ModalEditTurma;
