import { API_URL } from "./settings.js";

async function setAttendance(attendance, studentGroup, date) {
  const data = {
    attendance: attendance,
    student_group: studentGroup,
    date: date,
  };
  const response = await fetch(`${API_URL}/attendance/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

async function updateAttendance(id, attendance, date) {
  const data = {
    attendance: attendance,
    date: date,
  };
  const response = await fetch(`${API_URL}/attendance/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

export { setAttendance, updateAttendance };
