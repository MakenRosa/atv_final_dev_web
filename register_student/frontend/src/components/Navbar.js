import React from 'react';
import '../styles/Navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => (
        <header className="header">
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">Escola</a>
                    <div className="vr"></div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="/" className="nav-link active" id="home-link"><i className="fa fa-home"></i>Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                                <i className="fa fa-edit nav-link-item"></i>
                                Cadastro</a>
                            <ul className="dropdown-menu">
                                <li><a href="/cadastro-aluno" className="dropdown-item">Aluno</a></li>
                                <li><a href="/cadastro-frequencia" className="dropdown-item">Frequências</a></li>
                                <li><a href="/cadastro-nota" className="dropdown-item">Notas</a></li>
                                <li><a href="/cadastro-turma" className="dropdown-item">Turmas</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"><i className="fa fa-search nav-link-item"></i>Consulta</a>
                            <ul className="dropdown-menu">
                                <li><a href="/consulta-aluno" className="dropdown-item">Aluno</a></li>
                                <li><a href="/consulta-frequencia" className="dropdown-item">Frequências</a></li>
                                <li><a href="#" className="dropdown-item">Notas</a></li>
                                <li><a href="/consulta-turma" className="dropdown-item">Turmas</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"><i className="fa fa-chart-column nav-link-item"></i>Relatório</a>
                            <ul className="dropdown-menu">
                                <li><a href="#" className="dropdown-item">Aluno</a></li>
                                <li><a href="#" className="dropdown-item">Frequências</a></li>
                                <li><a href="#" className="dropdown-item">Notas</a></li>
                                <li><a href="#" className="dropdown-item">Turmas</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )

export default Navbar;
