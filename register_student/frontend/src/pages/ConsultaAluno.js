import React from 'react';
import Navbar from '../components/Navbar';
import Field from '../components/Field';
import FieldTurma from '../components/FieldTurma';

function ConsultaAluno() {
    return (
        <div className="consultaAluno">
            <Navbar />
            <div className="content">
                <h1>Consulta de Alunos</h1>
                <Field id="nome" label="Nome" type="text" placeholder="Digite o nome do aluno" />
                <FieldTurma/>
                <Field id="matricula" label="Matrícula" type="text" placeholder="Digite a matrícula do aluno" />
                <button type="submit" className="btn btn-primary"><i className="fas fa-search"></i> Pesquisar</button>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Matrícula</th>
                            <th scope="col">Aluno</th>
                            <th scope="col">Turma</th>
                            <th scope="col">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">123456</th>
                            <td>João da Silva</td>
                            <td>1</td>
                            <td>
                                <button type="button" className="btn btn-primary"><i className="fas fa-search-plus"></i></button>
                                <button type="button" className="btn btn-primary"><i className="fas fa-edit"></i></button>
                                <button type="button" className="btn btn-danger"><i className="fas fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ConsultaAluno;