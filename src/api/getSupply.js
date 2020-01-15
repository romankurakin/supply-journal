import axios from "axios";
import { arrayToObject } from "../util/arrayToObject.js";

export async function getSupply() {
  try {
    const { data } = await axios.get("/mock.json");
    return arrayToObject(data.supply, "id");
  } catch (error) {
    throw error;
  }
}
