async function setAddress({ street, district, city, complement, number, fu }) {
  const data = {
    street: street,
    district: district,
    city: city,
    complement: complement,
    number: number,
    fu: fu,
  };

  try {
    const response = await fetch(`${ip}/api/address/`, {
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

async function getAddress() {
  try {
    const response = await fetch(`${ip}/api/address/`);
    validateResponse(response);
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function updateAddress({
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
    const response = await fetch(`${ip}/api/address/${id}`, {
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

async function deleteAddress({ id }) {
  try {
    const response = await fetch(`${ip}/api/address/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
