import React from 'react';
import Navbar from '../components/Navbar';
import Field from '../components/Field';
import FieldTurma from '../components/FieldTurma';

function CadastroNota() {
    return (
        <div className="cadastroNota">
            <Navbar />
            <div className="content">
                <h1>Cadastro de Nota</h1>
                <FieldTurma/>
                <Field id="dataNota" label="Data da Nota" type="date" placeholder="Digite a data da nota" />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Matrícula</th>
                            <th scope="col">Aluno</th>
                            <th scope="col">Nota</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">123456</th>
                            <td>João da Silva</td>
                            <td><input type="text" /></td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </div>
        </div>
    );
}

export default CadastroNota;