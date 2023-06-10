// Create Nota para criar precisa pegar o id do getGroup
async function setScore({ score, date, studentGroup }) {
  const data = {
    score: score,
    date: date,
    studentGroup: studentGroup,
  };
  try {
    const response = await fetch(`${ip}/api/v1/score/`, {
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

// Update Nota
async function updateScore({ id, nota, date }) {
  const data = {
    nota: nota,
    date: date,
  };
  try {
    const response = await fetch(`${ip}/api/v1/score/${id}/`, {
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
    const response = await fetch(`${ip}/api/v1/score/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
}
