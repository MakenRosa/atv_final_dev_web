// Create Group
async function setGroup({ name, date }) {
  const data = {
    name: name,
    date: date,
  };
  try {
    const response = await fetch(`${ip}/api/v1/group/`, {
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

// Get todas as turmas
async function getGroupAll() {
  try {
    const response = await fetch(`${ip}/api/v1/group/`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

// Get turmas e tudo que tem dentro Alunos, Frequencia, Notas
async function getGroup(id) {
  try {
    const response = await fetch(`${ip}/api/v1/group/${id}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

// Update Turma
async function updateGroup({ id, name, date }) {
  const data = {
    name: name,
    date: date,
  };
  try {
    const response = await fetch(`${ip}/api/v1/group/${id}/`, {
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
