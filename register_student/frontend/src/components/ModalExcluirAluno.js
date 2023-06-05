import React, { useState } from 'react'
import  ModalComponent  from "./ModalComponent"
import { ModalFooter } from 'react-bootstrap'

const ModalExcluirAluno = () => {
    return (
        <ModalComponent title="Excluir Aluno" buttonLabel={<i className="fas fa-trash-alt"></i>} buttonVariant="danger">
            <p>Tem certeza que deseja excluir o aluno abaixo?</p>
            <p><strong>Nome:</strong> João da Silva</p>
            <p><strong>Matrícula:</strong> 123456</p>
            <ModalFooter>
                <button type="button" className="btn btn-secondary" onClick={() => window.location.reload()}>Não</button>
                <button type="button" className="btn btn-danger">Sim</button>
            </ModalFooter>
        </ModalComponent>
    )
}

export default ModalExcluirAluno