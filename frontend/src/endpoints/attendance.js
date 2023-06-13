import { API_URL } from "./settings.js";

async function setAttendance(attendance, studentGroup, date) {
  const data = {
    attendance: attendance,
    student_group: studentGroup,
    date: date,
  };
  try {
    const response = await fetch(`${API_URL}/attendance/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Update Frequencia
async function updateAttendance(id, attendance, date) {
  const data = {
    attendance: attendance,
    date: date,
  };
  try {
    const response = await fetch(`${API_URL}/attendance/${id}/`, {
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
    const response = await fetch(`${API_URL}/attendance/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export { setAttendance, updateAttendance, deleteAttendance };
