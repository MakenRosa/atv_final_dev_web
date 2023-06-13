import { API_URL } from "./settings";
// Create Nota para criar precisa pegar o id do getGroup
async function setScore(score, date, studentGroup) {
  const data = {
    score: score,
    date: date,
    student_group: studentGroup,
  };
  try {
    const response = await fetch(`${API_URL}/score/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

export { setScore };

// Update Nota
async function updateScore({ id, nota, date }) {
  const data = {
    nota: nota,
    date: date,
  };
  try {
    const response = await fetch(`${API_URL}/score/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
}

// Delete Nota
async function deleteScore(id) {
  try {
    const response = await fetch(`${API_URL}/score/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
}
