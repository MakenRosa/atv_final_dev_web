import React from 'react';
import Navbar from '../components/Navbar';
import Field from '../components/Field';
import FieldTurma from '../components/FieldTurma';
import '../styles/CadastroAluno.css';

function CadastroAluno() {
    return (
        <div className="cadastroAluno">
        <Navbar />
        <div className="content">
            <h1 className="title">Cadastro de Aluno</h1>
            <div>
                <form>
                    <div className="form-group">
                        <Field id="nome" label="Nome" type="text" placeholder="Digite o nome do aluno" />
                        <Field id="dataNascimento" label="Data de Nascimento" type="date" />
                        <Field id="telefone" label="Telefone" type="tel" placeholder="Digite o telefone do aluno" />
                        <Field id="celular" label="Celular" type="tel" placeholder="Digite o celular do aluno" />
                        <Field id="matricula" label="Matrícula" type="number" placeholder="Digite a matrícula do aluno" />
                        <FieldTurma className="field-turma"/>
                    </div>
                    <h2>Endereço</h2>
                    <div className="form-group">
                        <Field id="cep" label="CEP" type="number" placeholder="Digite o CEP do aluno" />
                        <Field id="logradouro" label="Logradouro" type="text" placeholder="Digite o logradouro do aluno" />
                        <Field id="complemento" label="Complemento" type="text" placeholder="Digite o complemento do aluno" />
                        <Field id="bairro" label="Bairro" type="text" placeholder="Digite o bairro do aluno" />
                        <Field id="numero" label="Número" type="text" placeholder="Digite o número do aluno" />
                        <Field id="cidade" label="Cidade" type="text" placeholder="Digite a cidade do aluno" />
                        <Field id="estado" label="UF" type="select" options={['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
                            'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
                            'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']} />
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        </div>
        </div>
    );
}

export default CadastroAluno;