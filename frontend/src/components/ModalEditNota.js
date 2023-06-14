import React, { useState, useEffect } from "react";
import Field from "./Field";
import ModalComponent from "./ModalComponent";
import { ModalFooter, Alert } from "react-bootstrap";
import { updateScore } from "../endpoints/score.js";

const ModalEditNota = ({
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
  const [scores, setScores] = useState([]);
  const [group, setGroup] = useState({ id: "", name: "", date: "" });

  useEffect(() => {
    if (student) {
      setNome(student.student.full_name);
      setMatricula(student.student.id);
      setGroup(selectedGroup);
      setTurma(selectedGroup.name);
      setScores(student.scores);
      setAlertType(null);
      setAlertMessage(null);
    }
  }, [student]);

  const validateInput = (inputValue) => {
    if (
      /^(\d*[\.,])?\d+$/.test(inputValue) &&
      parseFloat(inputValue) >= 0 &&
      parseFloat(inputValue) <= 10
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleScoreChange = (index, value) => {
    let updatedScores = [...scores];
    updatedScores[index].score = value;
    updatedScores[index].updated = true;
    setScores(updatedScores);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const isValid = scores.every((s) => validateInput(s.score));
    const scoresRequest = [];

    if (!isValid) {
      setAlertType("danger");
      setAlertMessage("Por favor, preencha todas as notas corretamente.");
      return;
    } else {
      scores.map((s) => {
        if (s.updated) {
          scoresRequest.push({
            id: s.id,
            score: s.score.replace(",", "."),
            date: s.date,
          });
        }
      });
    }
    if (scoresRequest.length > 0) {
      try {
        await Promise.all(
          scoresRequest.map((s) => updateScore(s.id, s.score, s.date))
        );
        setAlertType("success");
        setAlertMessage("As notas foram editadas com sucesso!");
      } catch (error) {
        setAlertType("danger");
        setAlertMessage("Ocorreu um erro ao editar a nota.");
        console.log(error);
      }
    } else {
      setAlertType("info");
      setAlertMessage("Nenhuma nota para editar, verifique.");
    }
  };

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
                <th scope="col">Nota</th>
              </tr>
            </thead>
            <tbody>
              {scores.length > 0 ? (
                scores.map((a, index) => (
                  <tr key={index}>
                    <td>
                      {new Date(`${a.date}T12:00:00`).toLocaleDateString(
                        "pt-BR"
                      )}
                    </td>
                    <td>
                      <input
                        type="text"
                        value={a.score}
                        onChange={(e) =>
                          handleScoreChange(index, e.target.value)
                        }
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">Nenhuma nota encontrada para o aluno selecionado.</td>
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
              Fechar
            </button>
          </ModalFooter>
        </form>
      </div>
    </ModalComponent>
  );
};

export default ModalEditNota;
