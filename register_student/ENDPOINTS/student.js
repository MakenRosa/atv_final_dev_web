// Create Aluno
async function setGroup({
  full_name,
  contact_number,
  phone_number,
  date_of_birth,
  street,
  number,
  extra,
  neighborhood,
  city,
  state,
  groups,
}) {
  const data = {
    full_name: full_name,
    contact_number: contact_number,
    phone_number: phone_number,
    date_of_birth: date_of_birth,
    street: street,
    number: number,
    extra: extra,
    neighborhood: neighborhood,
    city: city,
    state: state,
    groups: groups,
  };
  try {
    const response = await fetch(`${ip}/api/v1/students/`, {
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

// Get Alunos
async function getStudents() {
  try {
    const response = await fetch(`${ip}/api/v1/students/`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

// Update Aluno
async function updateStudent({
  full_name,
  contact_number,
  phone_number,
  date_of_birth,
  street,
  number,
  extra,
  neighborhood,
  city,
  state,
  groups,
}) {
  const data = {
    full_name: full_name,
    contact_number: contact_number,
    phone_number: phone_number,
    date_of_birth: date_of_birth,
    street: street,
    number: number,
    extra: extra,
    neighborhood: neighborhood,
    city: city,
    state: state,
    groups: groups,
  };
  try {
    const response = await fetch(`${ip}/api/v1/students/${id}/`, {
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

// Delete Aluno
async function deleteStudent(id) {
  try {
    const response = await fetch(`${ip}/api/v1/students/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
