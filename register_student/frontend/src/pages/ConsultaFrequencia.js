import React from 'react';
import Navbar from '../components/Navbar';
import Field from '../components/Field';
import FieldTurma from '../components/FieldTurma';

function ConsultaFrequencia() {
    return (
        <div className="consultaFrequencia">
            <Navbar />
            <div className="content">
                <h1>Consulta de Frequência</h1>
                <FieldTurma />
                <button type="submit" className="btn btn-primary"><i className="fas fa-search"></i> Pesquisar</button>
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
                                <button type="button" className="btn btn-primary"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ConsultaFrequencia;