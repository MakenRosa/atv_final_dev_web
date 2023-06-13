import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Field from "../components/Field";
import "../styles/CadastroAluno.css";
import ModalMessage from "../components/ModalMessage";
import { createStudent } from "../endpoints/students.js";
import { getGroupAll } from "../endpoints/groups.js";
import { useEffect } from "react";

function CadastroAluno() {
  const [full_name, setFullName] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [extra, setExtra] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [options, setOptions] = useState([{ value: "", label: "" }]);
  const [groups, setGroups] = useState("");

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const groupData = await getGroupAll();
        setOptions(
          groupData.map((group) => ({ value: group.id, label: group.name }))
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchGroups();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await createStudent(
          full_name,
          contact_number,
          phone_number,
          date_of_birth,
          street,
          number,
          extra,
          neighborhood,
          city,
          state,
          groups
        );
        if (response.ok) {
          setModalTitle("Sucesso");
          setModalMessage("O aluno foi criado com sucesso!");
          resetForm();
        } else {
          setModalTitle("Erro");
          setModalMessage("Ocorreu um erro ao criar o aluno.");
        }
        setModalShow(true);
      } catch (error) {
        setModalTitle("Erro");
        setModalMessage("Ocorreu um erro ao criar o aluno.");
        setModalShow(true);
      }
    }
  };

  const validateForm = () => {
    if (
      !full_name ||
      !contact_number ||
      !phone_number ||
      !date_of_birth ||
      !street ||
      !number ||
      !extra ||
      !neighborhood ||
      !city ||
      !state ||
      !groups
    ) {
      setModalTitle("Erro");
      setModalMessage("Todos os campos devem ser preenchidos.");
      setModalShow(true);
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setFullName("");
    setContactNumber("");
    setPhoneNumber("");
    setDateOfBirth("");
    setStreet("");
    setNumber("");
    setExtra("");
    setNeighborhood("");
    setCity("");
    setState("");
    setGroups("");
  };

  return (
    <div className="cadastroAluno">
      <Navbar />
      <div className="content">
        <h1 className="title">Cadastro de Aluno</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <Field
                id="nome"
                label="Nome"
                type="text"
                placeholder="Digite o nome do aluno"
                value={full_name}
                onChange={(event) => setFullName(event.target.value)}
              />
              <Field
                id="dataNascimento"
                label="Data de Nascimento"
                type="date"
                value={date_of_birth}
                onChange={(event) => setDateOfBirth(event.target.value)}
              />
              <Field
                id="telefone"
                label="Telefone"
                type="tel"
                placeholder="Digite o telefone do aluno"
                value={contact_number}
                onChange={(event) => setContactNumber(event.target.value)}
              />
              <Field
                id="celular"
                label="Celular"
                type="tel"
                placeholder="Digite o celular do aluno"
                value={phone_number}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
              <div>
                <label className="FieldTurma" htmlFor="turma">
                  Turma
                </label>
                <select
                  id="turma"
                  className="form-controlfield-turma"
                  value={groups}
                  onChange={(event) => setGroups(event.target.value)}
                >
                  <option value="">Selecione uma turma</option>
                  {options.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <h2>Endereço</h2>
            <div className="form-group">
              <Field
                id="logradouro"
                label="Logradouro"
                type="text"
                placeholder="Digite o logradouro do aluno"
                value={street}
                onChange={(event) => setStreet(event.target.value)}
              />
              <Field
                id="complemento"
                label="Complemento"
                type="text"
                placeholder="Digite o complemento do aluno"
                value={extra}
                onChange={(event) => setExtra(event.target.value)}
              />
              <Field
                id="bairro"
                label="Bairro"
                type="text"
                placeholder="Digite o bairro do aluno"
                value={neighborhood}
                onChange={(event) => setNeighborhood(event.target.value)}
              />
              <Field
                id="numero"
                label="Número"
                type="text"
                placeholder="Digite o número do aluno"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
              />
              <Field
                id="cidade"
                label="Cidade"
                type="text"
                placeholder="Digite a cidade do aluno"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
              <Field
                id="estado"
                label="UF"
                type="select"
                options={[
                  "AC",
                  "AL",
                  "AP",
                  "AM",
                  "BA",
                  "CE",
                  "DF",
                  "ES",
                  "GO",
                  "MA",
                  "MT",
                  "MS",
                  "MG",
                  "PA",
                  "PB",
                  "PR",
                  "PE",
                  "PI",
                  "RJ",
                  "RN",
                  "RS",
                  "RO",
                  "RR",
                  "SC",
                  "SP",
                  "SE",
                  "TO",
                ].map((option) => ({ value: option, label: option }))}
                value={state}
                onChange={(event) => setState(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </form>
        </div>
      </div>
      <ModalMessage
        show={modalShow}
        onClose={() => setModalShow(false)}
        title={modalTitle}
        message={modalMessage}
      />
    </div>
  );
}

export default CadastroAluno;
