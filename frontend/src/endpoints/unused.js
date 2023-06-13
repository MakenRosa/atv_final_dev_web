
// Delete Frequencia
async function deleteAttendance(id) {
    try {
      const response = await fetch(`${API_URL}/attendance/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteScore(id) {
    try {
      const response = await fetch(`${API_URL}/score/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }