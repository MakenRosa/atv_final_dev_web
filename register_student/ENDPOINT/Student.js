async function setStudent({
  name,
  phone,
  registration,
  date_born,
  cell_phone,
  address,
  school_classes,
}) {
  const data = {
    name: name,
    phone: phone,
    registration: registration,
    date_born: date_born,
    cell_phone: cell_phone,
    address: address,
    school_classes: school_classes,
  };

  try {
    const response = await fetch(`${ip}/api/student/`, {
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

async function getStudent() {
  try {
    const response = await fetch(`${ip}/api/student/`);
    validateResponse(response);
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function updateStudent({
  id,
  name,
  phone,
  registration,
  date_born,
  cell_phone,
  address,
  school_classes,
}) {
  const data = {
    name: name,
    phone: phone,
    registration: registration,
    date_born: date_born,
    cell_phone: cell_phone,
    address: address,
    school_classes: school_classes,
  };

  try {
    const response = await fetch(`${ip}/api/student/${id}`, {
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

async function deleteStudent({ id }) {
  try {
    const response = await fetch(`${ip}/api/student/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
