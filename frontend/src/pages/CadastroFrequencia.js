import React from 'react';
import Navbar from '../components/Navbar';
import FieldTurma from '../components/FieldTurma';
import "../styles/CadastroFrequencia.css"

function CadastroFrequencia() {
    return (
        <div className="cadastroFrequencia">
            <Navbar />
            <div className="content">
                <h1 className="title">Cadastro de Frequência</h1>
                <FieldTurma className="field-turma" />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Matrícula</th>
                            <th scope="col">Aluno</th>
                            <th scope="col">Presença</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">123456</th>
                            <td>João da Silva</td>
                            <td><input type="checkbox" id="presencaJoao" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </div>
        </div>
    );
}

export default CadastroFrequencia;