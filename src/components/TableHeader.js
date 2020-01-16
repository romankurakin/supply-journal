import React from "react";
import { Table } from "semantic-ui-react";

export const TableHeader = () => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Номер поставки</Table.HeaderCell>
        <Table.HeaderCell>Склад</Table.HeaderCell>
        <Table.HeaderCell>Поставщик</Table.HeaderCell>
        <Table.HeaderCell>Ворота</Table.HeaderCell>
        <Table.HeaderCell>Дата создания</Table.HeaderCell>
        <Table.HeaderCell>Планируемая дата поставки</Table.HeaderCell>
        <Table.HeaderCell>Дата завершения</Table.HeaderCell>
        <Table.HeaderCell>Планируемое кол-во палет</Table.HeaderCell>
        <Table.HeaderCell>Итого товаров</Table.HeaderCell>
        <Table.HeaderCell>Итого штук товаров</Table.HeaderCell>
        <Table.HeaderCell>Статус</Table.HeaderCell>
        <Table.HeaderCell>Приоритет</Table.HeaderCell>
        <Table.HeaderCell>Дорогая</Table.HeaderCell>
        <Table.HeaderCell>Машины</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};
