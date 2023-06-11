import React from 'react';
import Field from './Field';
import ModalComponent from './ModalComponent';
import { ModalFooter } from 'react-bootstrap';

const ModalTurma = () => {
    return (
        <ModalComponent title="Editar Turma" buttonLabel={<i className="fas fa-edit"></i>} buttonVariant="warning">
            <div>
                <form>
                    <div className="form-group">
                        <Field id="nomeTurma" label="Nome da Turma" type="text" placeholder="Digite o nome da turma" />
                        <Field id="dataTurma" label="Data da Turma" type="date" placeholder="Digite a data da turma" />
                    </div>
                    <ModalFooter><button type="submit" className="btn btn-warning">Salvar</button></ModalFooter>
                </form>
            </div>
        </ModalComponent>
    );
}

export default ModalTurma;