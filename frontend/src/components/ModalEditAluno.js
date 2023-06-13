import Field from "./Field";
import ModalComponent from "./ModalComponent";
import { ModalFooter, Alert } from "react-bootstrap";
import { updateStudent } from "../endpoints/students.js";
import React, { useState, useEffect } from "react";
import { getGroupAll } from "../endpoints/groups.js";
import { getStudent } from "../endpoints/students.js";

const ModalEditarAluno = ({ show, student, handleOpen, handleClose }) => {
  const [id, setId] = useState(null);
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [extra, setExtra] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [groups, setGroups] = useState("");
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [options, setOptions] = useState([{ value: "", label: "" }]);

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

  useEffect(() => {
    if (show && student) {
      const fetchStudentDetails = async () => {
        const response = await getStudent(student.id);
        setId(response.id);
        setFullName(response.full_name);
        setDateOfBirth(response.date_of_birth);
        setPhoneNumber(response.phone_number);
        setContactNumber(response.contact_number);
        setStreet(response.street);
        setNumber(response.number);
        setExtra(response.extra);
        setNeighborhood(response.neighborhood);
        setCity(response.city);
        setState(response.state);
        setGroups(response.groups[0]);
        setAlertType(null);
        setAlertMessage(null);
      };
      fetchStudentDetails();
    }
  }, [show, student]);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (
      !fullName ||
      !dateOfBirth ||
      !phoneNumber ||
      !contactNumber ||
      !street ||
      !number ||
      !extra ||
      !neighborhood ||
      !city ||
      !state ||
      !groups
    ) {
      setAlertType("danger");
      setAlertMessage("Por favor, preencha todos os campos.");
      return;
    }
    try {
      const response = await updateStudent(
        id,
        fullName,
        contactNumber,
        phoneNumber,
        dateOfBirth,
        street,
        number,
        extra,
        neighborhood,
        city,
        state,
        groups,
      );
      if (response.ok) {
        setAlertType("success");
        setAlertMessage("O aluno foi editado com sucesso!");
      } else {
        setAlertType("danger");
        setAlertMessage("Ocorreu um erro ao editar o aluno.");
      }
    } catch (error) {
      setAlertType("danger");
      setAlertMessage("Ocorreu um erro ao editar o aluno.");
    }
  };

  return student ? (
    <ModalComponent
      title="Editar Aluno"
      show={show}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
      <div>
        {alertType && alertMessage && (
          <Alert variant={alertType}>{alertMessage}</Alert>
        )}
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <Field
              id="nomeAluno"
              label="Nome do Aluno"
              type="text"
              placeholder="Digite o nome do aluno"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
            <Field
              id="dataNascimento"
              label="Data de Nascimento"
              type="date"
              placeholder="Digite a data de nascimento do aluno"
              value={dateOfBirth}
              onChange={(event) => setDateOfBirth(event.target.value)}
            />
            <Field
              id="telefone"
              label="Telefone"
              type="text"
              placeholder="Digite o telefone do aluno"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
            <Field
              id="celular"
              label="Celular"
              type="text"
              placeholder="Digite o celular do aluno"
              value={contactNumber}
              onChange={(event) => setContactNumber(event.target.value)}
            />
            <Field
              id="rua"
              label="Rua"
              type="text"
              placeholder="Digite a rua do aluno"
              value={street}
              onChange={(event) => setStreet(event.target.value)}
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
              id="cidade"
              label="Cidade"
              type="text"
              placeholder="Digite a cidade do aluno"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
            <Field
              id="estado"
              label="Estado"
              type="text"
              placeholder="Digite o estado do aluno"
              value={state}
              onChange={(event) => setState(event.target.value)}
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
          <ModalFooter>
            <button type="submit" className="btn btn-warning">
              Salvar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleClose}
            >
              Fechar
            </button>
          </ModalFooter>
        </form>
      </div>
    </ModalComponent>
  ) : null;
};

export default ModalEditarAluno;
