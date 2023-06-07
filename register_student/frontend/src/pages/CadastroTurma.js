import React from 'react';
import Navbar from '../components/Navbar';
import Field from '../components/Field';

function CadastroTurma() {
    return (
        <div className="cadastroTurma">
            <Navbar />
            <div className="content">
                <h1>Cadastro de Turma</h1>
                <div>
                    <form>
                        <div className="form-group">
                            <Field id="nome-turma" label="Nome da Turma:" type="text" placeholder="Digite o nome da turma" />
                            <Field id="dataTurma" label="Data da Turma" type="date" placeholder="Digite a data da turma" />
                        </div>
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CadastroTurma;