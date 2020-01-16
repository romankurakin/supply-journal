import axios from "axios";

export async function getSupply() {
  try {
    const { data } = await axios.get("/mock.json");
    const { supply } = data;
    return supply.map(item => {
      return {
        id: item.id,
        warehouse: item.warehouseId,
        supplier: `${item.supplierName} (${item.supplierId})`,
        gate: item.gateId,
        createdAt: item.createdAt,
        plannedArrival: item.plannedArrival,
        finishedAt: item.finishedAt,
        docPalletsQuantity: item.docPalletsQuantity,
        uniqueItemsQuantity: item.uniqueItemsQuantity,
        itemsQuantity: item.itemsQuantity,
        status: status(item.status),
        priority: priority(item.priority),
        isExpensive: isExpensive(item.isExpensive),
        cars: item.cars
      };
    });
  } catch (error) {
    throw error;
  }
}

function priority(p) {
  switch (p) {
    case "Medium":
      return "Средний";
    case "High":
      return "Высокий";
    default:
      return p;
  }
}

function status(s) {
  switch (s) {
    case "New":
      return "Создана";
    case "Processing":
      return "Обработка";
    case "Unloading":
      return "Разгрузка началась";
    case "Unloaded":
      return "Разгрузка закончена";
    case "Done":
      return "Завершена";
    default:
      return s;
  }
}

function isExpensive(exp) {
  switch (exp) {
    case false:
      return "Нет";
    case true:
      return "Да";
    default:
      return exp;
  }
}
