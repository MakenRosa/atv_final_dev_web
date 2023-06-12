import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Field from "../components/Field";
import "../styles/CadastroTurma.css";
import { setGroup } from "../endpoints/groups.js";
import ModalMessage from "../components/ModalMessage";

function CadastroTurma() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await setGroup({ name, date });
      if (response.ok) {
        setModalTitle("Sucesso");
        setModalMessage("A turma foi criada com sucesso!");
        setName("");
        setDate("");
      } else {
        setModalTitle("Erro");
        setModalMessage("Ocorreu um erro ao criar a turma.");
      }
      setModalShow(true);
    } catch (error) {
      setModalTitle("Erro");
      setModalMessage("Ocorreu um erro ao criar a turma.");
      setModalShow(true);
    }
  };

  return (
    <div className="cadastroTurma">
      <Navbar />
      <div className="content">
        <h1 className="title">Cadastro de Turma</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <Field
                id="nome-turma"
                label="Nome da Turma"
                type="text"
                placeholder="Digite o nome da turma"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Field
                id="dataTurma"
                label="Data da Turma"
                type="date"
                placeholder="Digite a data da turma"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </form>
        </div>
      </div>
      <ModalMessage show={modalShow} onClose={() => setModalShow(false)} title={modalTitle} message={modalMessage} />
    </div>
  );
}

export default CadastroTurma;
