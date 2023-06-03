import React from 'react';
import Navbar from '../components/Navbar';
import FieldTurma from '../components/FieldTurma';

function CadastroFrequencia() {
    return (
        <div className="cadastroFrequencia">
            <Navbar />
            <div className="content">
                <h1>Cadastro de Frequência</h1>
                <FieldTurma/>
                <table className="table table-striped">
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
                            <td><input type="checkbox" /></td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </div>
        </div>
    );
}

export default CadastroFrequencia;