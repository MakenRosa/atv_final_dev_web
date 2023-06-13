import { API_URL } from "./settings";

async function setScore(score, date, studentGroup) {
  const data = {
    score: score,
    date: date,
    student_group: studentGroup,
  };
  const response = await fetch(`${API_URL}/score/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Error: ${errorData.detail}`);
  }
  return response.json();
}

async function updateScore(id, score, date) {
  const data = {
    score: score,
    date: date,
  };
  const response = await fetch(`${API_URL}/score/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

export { setScore, updateScore };