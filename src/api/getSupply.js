import axios from "axios";

export async function getSupply() {
  try {
    const { data } = await axios.get("/mock.json");
    const { supply } = data;
    return supply.map((item) => {
      return {
        ...item,
        supplier: `${item.supplierName} (${item.supplierId})`,
      };
    });
  } catch (error) {
    throw error;
  }
}
