import React from 'react';
import Field from './Field';
import ModalComponent from './ModalComponent';
import FieldTurma from './FieldTurma';
import { ModalFooter } from 'react-bootstrap';

const ModalAluno = ({ title, editable, icon, buttonVariant }) => {

    return (
        <ModalComponent title={title} buttonLabel={icon ? <i className={icon}></i> : <i className="fas fa-edit"></i>} buttonVariant={buttonVariant}>
            <div>
                <form>
                    <div className="form-group">
                        <Field id="nome" label="Nome" type="text" placeholder="Digite o nome do aluno" disabled={!editable} />
                        <Field id="dataNascimento" label="Data de Nascimento" type="date" disabled={!editable} />
                        <Field id="telefone" label="Telefone" type="text" placeholder="Digite o telefone do aluno" disabled={!editable} />
                        <Field id="celular" label="Celular" type="text" placeholder="Digite o celular do aluno" disabled={!editable} />
                        <Field id="matricula" label="Matrícula" type="text" placeholder="Digite a matrícula do aluno" disabled={!editable} />
                        <FieldTurma disabled={!editable} />
                    </div>
                    <h2>Endereço</h2>
                    <div className="form-group">
                        <Field id="cep" label="CEP" type="text" placeholder="Digite o CEP do aluno" disabled={!editable} />
                        <Field id="logradouro" label="Logradouro" type="text" placeholder="Digite o logradouro do aluno" disabled={!editable} />
                        <Field id="complemento" label="Complemento" type="text" placeholder="Digite o complemento do aluno" disabled={!editable} />
                        <Field id="bairro" label="Bairro" type="text" placeholder="Digite o bairro do aluno" disabled={!editable} />
                        <Field id="numero" label="Número" type="text" placeholder="Digite o número do aluno" disabled={!editable} />
                        <Field id="cidade" label="Cidade" type="text" placeholder="Digite a cidade do aluno" disabled={!editable} />
                        <Field id="estado" label="UF" type="select" options={['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
                            'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
                            'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']} disabled={!editable} />
                    </div>
                    <ModalFooter>
                    {editable ?                        
                    <button type="submit" className="btn btn-primary">Salvar</button>
                     : <button type="button" className="btn btn-primary" data-dismiss="modal">Ok</button>}
                    </ModalFooter>
                </form>
            </div>
        </ModalComponent>
    );
}

export default ModalAluno;
