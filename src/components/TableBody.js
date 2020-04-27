import React from "react";
import { Table } from "semantic-ui-react";

export const TableBody = ({ paginatedData }) => {
  const listRow = paginatedData.map((item) => (
    <Table.Row key={item.id}>
      <Table.Cell>{item.id}</Table.Cell>
      <Table.Cell>{item.warehouse}</Table.Cell>
      <Table.Cell>{item.supplier}</Table.Cell>
      <Table.Cell>{item.gate}</Table.Cell>
      <Table.Cell>{item.createdAt}</Table.Cell>
      <Table.Cell>{item.plannedArrival}</Table.Cell>
      <Table.Cell>{item.finishedAt}</Table.Cell>
      <Table.Cell>{item.docPalletsQuantity}</Table.Cell>
      <Table.Cell>{item.uniqueItemsQuantity}</Table.Cell>
      <Table.Cell>{item.itemsQuantity}</Table.Cell>
      <Table.Cell>{item.status}</Table.Cell>
      <Table.Cell>{item.priority}</Table.Cell>
      <Table.Cell>{item.isExpensive}</Table.Cell>
      <Table.Cell>{item.cars}</Table.Cell>
    </Table.Row>
  ));

  return <Table.Body>{listRow}</Table.Body>;
};
