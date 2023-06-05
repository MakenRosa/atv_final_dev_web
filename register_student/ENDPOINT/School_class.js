async function setClass({ subjects, date }) {
  const data = {
    subjects: subjects,
    date: date,
  };

  try {
    const response = await fetch(`${ip}/api/school_class/`, {
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

async function getClass() {
  try {
    const response = await fetch(`${ip}/api/attendance/`);
    validateResponse(response);
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function updateClass({ id, subjects, date }) {
  const data = {
    subjects: subjects,
    date: date,
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
