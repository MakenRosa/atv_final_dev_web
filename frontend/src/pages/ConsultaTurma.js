import React from "react";
import Navbar from "../components/Navbar";
import FieldTurma from "../components/FieldTurma";
import ModalEditTurma from "../components/ModalEditTurma";
import ModalVisualizarTurma from "../components/ModalVisualizarTurma";
import "../styles/ConsultaTurma.css";

function ConsultaTurma() {
  return (
    <div className="consultaTurma">
      <Navbar />
      <div className="content">
        <h1 className="title">Consulta de Turmas</h1>
        <div className="line">
          <FieldTurma />
          <button type="submit" className="btn btn-primary">
            <i className="fas fa-search"></i> Pesquisar
          </button>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Turma</th>
              <th scope="col">Data da Turma</th>
              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>01/01/2021</td>
              <td>
                <ModalVisualizarTurma id="modalVisualizar"/>
                <ModalEditTurma />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ConsultaTurma;
