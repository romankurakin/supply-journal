import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Table } from "semantic-ui-react";

import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import {
  paginatedSupplySelector,
  currentPageSelector,
  setCurrentPage,
} from "../features/supply/supplySlice";

export const PaginatedTable = () => {
  const dispatch = useDispatch();
  const { totalPages, paginatedSupply } = useSelector(paginatedSupplySelector);
  const currentPage = useSelector(currentPageSelector);

  const handlePaginationChange = (_e, { activePage }) => {
    dispatch(setCurrentPage(activePage));
  };

  return (
    <Fragment>
      <Table size="small">
        <TableHeader></TableHeader>
        <TableBody paginatedData={paginatedSupply}></TableBody>
      </Table>
      <Pagination
        size="small"
        activePage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePaginationChange}
      />
    </Fragment>
  );
};
