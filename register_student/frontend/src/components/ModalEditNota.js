import React from 'react';
import Field from './Field';
import ModalComponent from './ModalComponent';
import { ModalFooter } from 'react-bootstrap';
import FieldTurma from './FieldTurma';

const ModalEditNota = () => {
    return (
        <ModalComponent title="Editar Notas" buttonLabel={<i className="fas fa-edit"></i>} buttonVariant="warning">
            <div>
                <form>
                    <div className="form-group">
                        <Field id="aluno" label="Aluno" type="text" disabled />
                        <Field id="matricula" label="Matrícula" type="text" placeholder="Digite a matrícula" disabled />
                        <FieldTurma disabled />
                        <Field id="nota1" label="Nota 1" type="text" placeholder="Digite a nota 1" trash />
                        <Field id="nota2" label="Nota 2" type="text" placeholder="Digite a nota 2" trash />
                        <Field id="nota3" label="Nota 3" type="text" placeholder="Digite a nota 3" trash />
                        <Field id="nota4" label="Nota 4" type="text" placeholder="Digite a nota 4" trash />
                    </div>
                    <ModalFooter><button type="submit" className="btn btn-primary">Salvar</button></ModalFooter>
                </form>
            </div>
        </ModalComponent>
    );
}

export default ModalEditNota;