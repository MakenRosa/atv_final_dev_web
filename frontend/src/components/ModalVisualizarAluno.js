import React, { useState, useEffect } from "react";
import Field from "./Field";
import ModalComponent from "./ModalComponent";
import { ModalFooter } from "react-bootstrap";
import { getStudent } from "../endpoints/students.js";
import { getGroupAll } from "../endpoints/groups.js";

const ModalVisualizarAluno = ({ show, student, handleClose }) => {
  const [studentDetails, setStudentDetails] = useState(null);
  const [options, setOptions] = useState([{ value: "", label: "" }]);
  const [groups, setGroups] = useState(0);

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
    if (show && student) {
      const fetchStudentDetails = async () => {
        const details = await getStudent(student.id);
        setStudentDetails(details);
        setGroups(details.groups[0])
      };
      fetchStudentDetails();
    } else {
      setStudentDetails(null);
    }
  }, [show, student]);

  return studentDetails ? (
    <ModalComponent show={show} title="Visualizar Aluno" onClose={handleClose}>
      <div className="form-group">
        <Field
          id="matricula"
          label="Matrícula"
          type="text"
          disabled={true}
          value={studentDetails.id}
        />
        <Field
          id="nome"
          label="Nome"
          type="text"
          disabled={true}
          value={studentDetails.full_name}
        />
        <Field
          id="dataNascimento"
          label="Data de Nascimento"
          type="date"
          disabled={true}
          value={studentDetails.date_of_birth}
        />
        <Field
          id="telefone"
          label="Telefone"
          type="text"
          disabled={true}
          value={studentDetails.phone_number}
        />
        <Field
          id="celular"
          label="Celular"
          type="text"
          disabled={true}
          value={studentDetails.contact_number}
        />
      </div>
      <h2>Endereço</h2>
      <div className="form-group">
        <Field
          id="logradouro"
          label="Logradouro"
          type="text"
          disabled={true}
          value={studentDetails.street}
        />
        <Field
          id="complemento"
          label="Complemento"
          type="text"
          disabled={true}
          value={studentDetails.extra}
        />
        <Field
          id="bairro"
          label="Bairro"
          type="text"
          disabled={true}
          value={studentDetails.neighborhood}
        />
        <Field
          id="numero"
          label="Número"
          type="text"
          disabled={true}
          value={studentDetails.number}
        />
        <Field
          id="cidade"
          label="Cidade"
          type="text"
          disabled={true}
          value={studentDetails.city}
        />
        <Field
          id="estado"
          label="UF"
          disabled={true}
          value={studentDetails.state}
        />
        <Field
          id="estado"
          label="UF"
          disabled={true}
          value={studentDetails.state}
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
            disabled={true}
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
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClose}
        >
          Ok
        </button>
      </ModalFooter>
    </ModalComponent>
  ) : null;
};

export default ModalVisualizarAluno;
