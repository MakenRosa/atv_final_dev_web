import React from 'react';
import Navbar from '../components/Navbar';
import Field from '../components/Field';
import FieldTurma from '../components/FieldTurma';
import ModalAluno from '../components/ModalAluno';
import ModalExcluirAluno from '../components/ModalExcluirAluno';

function ConsultaAluno() {
    return (
        <div className="consultaAluno">
            <Navbar />
            <div className="content">
                <h1 className="title">Consulta de Alunos</h1>
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
                                <ModalAluno title="Visualizar Aluno" editable={false} icon="fas fa-eye" />
                                <ModalAluno title="Editar Aluno" editable={true} icon="fas fa-edit" />
                                <ModalExcluirAluno />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ConsultaAluno;