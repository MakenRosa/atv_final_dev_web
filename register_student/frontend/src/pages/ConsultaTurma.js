import React from 'react';
import Navbar from '../components/Navbar';
import FieldTurma from '../components/FieldTurma';

function ConsultaTurma() {
    return (
        <div className="consultaTurma">
            <Navbar />
            <div className="content">
                <h1>Consulta de Turma</h1>
                <FieldTurma />
                <button type="submit" className="btn btn-primary"><i className="fas fa-search"></i> Pesquisar</button>
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
                                <button type="button" className="btn btn-primary"><i className="fas fa-search-plus"></i></button>
                                <button type="button" className="btn btn-primary"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ConsultaTurma;