async function setAdress({ street, district, city, complement, number, fu }) {
  const data = {
    street: street,
    district: district,
    city: city,
    complement: complement,
    number: number,
    fu: fu,
  };

  try {
    const response = await fetch(`${ip}/api/adress/`, {
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

async function getAdress() {
  try {
    const response = await fetch(`${ip}/api/adress/`);
    validateResponse(response);
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function updateAdress({
  id,
  street,
  district,
  city,
  complement,
  number,
  fu,
}) {
  const data = {
    street: street,
    district: district,
    city: city,
    complement: complement,
    number: number,
    fu: fu,
  };

  try {
    const response = await fetch(`${ip}/api/adress/${id}`, {
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

async function deleteAdress({ id }) {
  try {
    const response = await fetch(`${ip}/api/adress/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
