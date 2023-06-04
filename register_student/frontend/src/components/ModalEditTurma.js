import React from 'react';
import Field from './Field';
import ModalComponent from './ModalComponent';
import FieldTurma from './FieldTurma';
import { ModalFooter } from 'react-bootstrap';

const ModalTurma = () => {
    return (
        <ModalComponent title="Editar Turma" buttonLabel={<i className="fas fa-edit"></i>} buttonVariant="warning">
            <div>
                <form>
                    <div className="form-group">
                        <FieldTurma />
                        <Field id="dataTurma" label="Data da Turma" type="date" placeholder="Digite a data da turma" />
                    </div>
                    <ModalFooter><button type="submit" className="btn btn-primary">Salvar</button></ModalFooter>
                </form>
            </div>
        </ModalComponent>
    );
}

export default ModalTurma;