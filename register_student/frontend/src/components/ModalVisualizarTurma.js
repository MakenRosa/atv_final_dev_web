import React from 'react';
import Field from './Field';
import ModalComponent from './ModalComponent';
import FieldTurma from './FieldTurma';
import { ModalFooter } from 'react-bootstrap';

const ModalVisualizarTurma = () => {
    return (
        <ModalComponent title="Visualizar Turma" buttonLabel={<i className="fas fa-eye"></i>} buttonVariant="info">
            <FieldTurma disabled={true} />
            <Field id="dataTurma" label="Data da Turma" type="date" placeholder="Digite a data da turma" disabled={true} />
            <div>
                <h2>Alunos</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Matrícula</th>
                            <th scope="col">Aluno</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">123456</th>
                            <td>João da Silva</td>
                        </tr>
                    </tbody>
                </table>
                <ModalFooter>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Ok</button>
                </ModalFooter>
            </div>
        </ModalComponent>
    )
}

export default ModalVisualizarTurma;