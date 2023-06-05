import React from 'react';
import Field from './Field';
import ModalComponent from './ModalComponent';
import { ModalFooter } from 'react-bootstrap';

const ModalEditFrequencia = () => {
    return (
        <ModalComponent title="Editar Frequência" buttonLabel={<i className="fas fa-edit"></i>} buttonVariant="warning">
            <Field id="nome" label="Nome" type="text"
            disabled={true} />
            <Field id="matricula" label="Matrícula" type="text"
            disabled={true} />
            <Field id="turma" label="Turma" type="text"
            disabled={true} />
            <Field id="faltas" label="Faltas" type="number"/>
            <ModalFooter>
                <button type="button" className="btn btn-secondary" onClick={() => window.location.reload()}>Cancelar</button>
                <button type="button" className="btn btn-warning">Salvar</button>
            </ModalFooter>
        </ModalComponent>
    );
}

export default ModalEditFrequencia;