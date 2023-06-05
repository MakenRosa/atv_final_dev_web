async function setScore({ score, school_classes, student }) {
  const data = {
    score: score,
    school_classes: school_classes,
    student: student,
  };

  try {
    const response = await fetch(`${ip}/api/score/`, {
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

async function getScore() {
  try {
    const response = await fetch(`${ip}/api/score/`);
    validateResponse(response);
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function updateScore({ id, score, school_classes, student }) {
  const data = {
    score: score,
    school_classes: school_classes,
    student: student,
  };

  try {
    const response = await fetch(`${ip}/api/score/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function deleteScore({ id }) {
  try {
    const response = await fetch(`${ip}/api/score/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
