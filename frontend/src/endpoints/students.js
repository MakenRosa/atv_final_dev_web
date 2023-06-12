import { API_URL } from "./settings.js";
// Create Aluno
async function createStudent(
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
  groups
) {
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
    groups: [groups],
  };
  try {
    const response = await fetch(`${API_URL}/students/`, {
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

export { createStudent, getStudents, updateStudent, deleteStudent, getStudent };

async function getStudent(id) {
  try {
    const response = await fetch(`${API_URL}/students/${id}/`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

// Get Alunos
async function getStudents(full_name = "", groups = "") {
  try {
    const params = new URLSearchParams({
      full_name,
      ...(groups && { groups }),
    });

    const response = await fetch(`${API_URL}/students/?${params}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

// Update Aluno
async function updateStudent(
  id,
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
  groups
) {
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
    const response = await fetch(`${API_URL}/students/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

// Delete Aluno
async function deleteStudent(id) {
  try {
    const response = await fetch(`${API_URL}/students/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
}
