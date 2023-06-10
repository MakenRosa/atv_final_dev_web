import React from "react";
import Navbar from "../components/Navbar";
import FieldTurma from "../components/FieldTurma";
import ModalEditFrequencia from "../components/ModalEditFrequencia";
import "../styles/ConsultaFrequencia.css";

function ConsultaFrequencia() {
  return (
    <div className="consultaFrequencia">
      <Navbar />
      <div className="content">
        <h1 className="title">Consulta de Frequência</h1>
        <div className="line">
          <FieldTurma />
          <button type="submit" className="btn btn-primary">
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
            <tr>
              <th scope="row">123456</th>
              <td>João da Silva</td>
              <td>0</td>
              <td>
                <ModalEditFrequencia />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ConsultaFrequencia;
