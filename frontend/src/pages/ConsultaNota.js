import React from "react";
import Navbar from "../components/Navbar";
import FieldTurma from "../components/FieldTurma";
import "../components/ModalEditNota";
import ModalEditNota from "../components/ModalEditNota";
import "../styles/ConsultaNota.css";

function ConsultaNota() {
  return (
    <div className="consultaNota">
      <Navbar />
      <div className="content">
        <h1 className="title">Consulta de Notas</h1>
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
              <th scope="col">Nota 1</th>
              <th scope="col">Nota 2</th>
              <th scope="col">Nota 3</th>
              <th scope="col">Nota 4</th>
              <th scope="col">Média</th>
              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">123456</th>
              <td>João da Silva</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>
                <ModalEditNota />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ConsultaNota;
