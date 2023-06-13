import { API_URL } from "./settings.js";

async function setGroup({ name, date }) {
  const data = {
    name: name,
    date: date,
  };
  const response = await fetch(`${API_URL}/group/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

async function getGroupAll() {
  const response = await fetch(`${API_URL}/group/`);
  return response.json();
}

async function getGroup(id) {
  const response = await fetch(`${API_URL}/group/${id}/`);
  return response.json();
}

async function updateGroup({ id, name, date }) {
  const data = {
    name: name,
    date: date,
  };
  const response = await fetch(`${API_URL}/group/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

export { setGroup, getGroupAll, getGroup, updateGroup };
