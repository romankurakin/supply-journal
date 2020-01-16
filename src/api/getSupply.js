import axios from "axios";

export async function getSupply() {
  try {
    const { data } = await axios.get("/mock.json");
    return data.supply;
  } catch (error) {
    throw error;
  }
}
