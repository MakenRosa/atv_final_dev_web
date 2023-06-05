async function setAttendance({ attendance, school_classes, student }) {
  const data = {
    attendance: attendance,
    school_classes: school_classes,
    student: student,
  };

  try {
    const response = await fetch(`${ip}/api/attendance/`, {
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

async function getAttendance() {
  try {
    const response = await fetch(`${ip}/api/attendance/`);
    validateResponse(response);
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function updateAttendance({ id, attendance, school_classes, student }) {
  const data = {
    attendance: attendance,
    school_classes: school_classes,
    student: student,
  };

  try {
    const response = await fetch(`${ip}/api/attendance/${id}`, {
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

async function deleteAttendance({ id }) {
  try {
    const response = await fetch(`${ip}/api/attendance/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
