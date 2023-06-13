import React, { useState, useEffect } from "react";
import Field from "./Field";
import ModalComponent from "./ModalComponent";
import { ModalFooter, Alert } from "react-bootstrap";
import { updateAttendance } from "../endpoints/attendance.js";

const ModalEditFrequencia = ({
  show,
  selectedGroup,
  student,
  handleOpen,
  handleClose,
}) => {
  const [alertType, setAlertType] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [turma, setTurma] = useState("");
  const [attendances, setAttendances] = useState([]);
  const [group, setGroup] = useState({ id: "", name: "", date: "" });

  const handleAttendanceChange = (index, value) => {
    let updatedAttendances = [...attendances];
    updatedAttendances[index].attendance = value;
    updatedAttendances[index].updated = true;
    setAttendances(updatedAttendances);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const atendancesRequest = [];
    attendances.map((attendance) => {
      if (attendance.updated) {
        atendancesRequest.push({
          id: attendance.id,
          attendance: attendance.attendance,
          date: attendance.date,
        });
      }
    });
    if (atendancesRequest.length > 0) {
      try {
        await Promise.all(
          atendancesRequest.map((attendance) =>
            updateAttendance(
              attendance.id,
              attendance.attendance,
              attendance.date
            )
          )
        );
        setAlertType("success");
        setAlertMessage("A frequência foi editada com sucesso!");
      } catch (error) {
        setAlertType("danger");
        setAlertMessage("Ocorreu um erro ao editar o aluno.");
        console.log(error);
      }
    } else {
      setAlertType("info");
      setAlertMessage("Nenhuma frequência para editar, verifique.");
    }
  };

  useEffect(() => {
    if (student) {
      setNome(student.student.full_name);
      setMatricula(student.student.id);
      setGroup(selectedGroup);
      setTurma(selectedGroup.name);
      setAttendances(student.attendances);
      setAlertType(null);
      setAlertMessage(null);
    }
  }, [student]);

  return (
    <ModalComponent
      title="Editar Frequência"
      show={show}
      handleOpen={handleOpen}
      handleClose={handleClose}
    >
      <div>
        {alertType && alertMessage && (
          <Alert variant={alertType}>{alertMessage}</Alert>
        )}
        <form onSubmit={handleOnSubmit}>
          <Field
            id="aluno"
            label="Aluno"
            type="text"
            value={nome}
            disabled={true}
          />
          <Field
            id="matricula"
            label="Matrícula"
            type="text"
            value={matricula}
            disabled={true}
          />
          <Field
            id="turma"
            label="Turma"
            type="text"
            value={turma}
            disabled={true}
          />
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Falta</th>
              </tr>
            </thead>
            <tbody>
              {attendances.length > 0 ? (
                attendances.map((a, index) => (
                  <tr key={index}>
                    <td>
                      {new Date(`${a.date}T12:00:00`).toLocaleDateString(
                        "pt-BR"
                      )}
                    </td>
                    <td>
                      <select
                        value={a.attendance}
                        onChange={(e) =>
                          handleAttendanceChange(index, e.target.value)
                        }
                      >
                        <option value="0">Não</option>
                        <option value="1">Sim</option>
                      </select>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">Nenhuma frequência encontrada para o aluno selecionado.</td>
                </tr>
              )}
            </tbody>
          </table>

          <ModalFooter>
            <button type="submit" className="btn btn-warning">
              Salvar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleClose}
            >
              Cancelar
            </button>
          </ModalFooter>
        </form>
      </div>
    </ModalComponent>
  );
};

export default ModalEditFrequencia;
