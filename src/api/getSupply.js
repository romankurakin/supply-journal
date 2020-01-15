import axios from "axios";

export async function getSupply() {
  try {
    const response = await axios.get("/mock.json");
    return response.data.supply;
  } catch (error) {
    throw error;
  }
}
