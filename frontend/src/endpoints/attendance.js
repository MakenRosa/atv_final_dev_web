// Create Frequencia para criar precisa pegar o id do getGroup
async function setAttendance({ attendance, date, studentGroup }) {
  const data = {
    attendance: attendance,
    date: date,
    studentGroup: studentGroup,
  };
  try {
    const response = await fetch(`${ip}/api/v1/attendance/`, {
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

// Update Frequencia
async function updateAttendance({ id, attendance, date }) {
  const data = {
    attendance: attendance,
    date: date,
  };
  try {
    const response = await fetch(`${ip}/api/v1/attendance/${id}/`, {
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

// Delete Frequencia
async function deleteAttendance(id) {
  try {
    const response = await fetch(`${ip}/api/v1/attendance/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
}
