import React from 'react';
import Homepage from './pages/Homepage';
import CadastroAluno from './pages/CadastroAluno';
import CadastroFrequencia from './pages/CadastroFrequencia';
import CadastroTurma from './pages/CadastroTurma';
import CadastroNota from './pages/CadastroNota';
import ConsultaAluno from './pages/ConsultaAluno';
import ConsultaFrequencia from './pages/ConsultaFrequencia';
import ConsultaTurma from './pages/ConsultaTurma';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cadastro-aluno" element={<CadastroAluno />} />
          <Route path="/cadastro-frequencia" element={<CadastroFrequencia />} />
          <Route path="/cadastro-turma" element={<CadastroTurma />} />
          <Route path="/cadastro-nota" element={<CadastroNota />} />
          <Route path="/consulta-aluno" element={<ConsultaAluno />} />
          <Route path="/consulta-frequencia" element={<ConsultaFrequencia />} />
          <Route path="/consulta-turma" element={<ConsultaTurma />} />
        </Routes>
      </Router>
    );
}

export default App;
