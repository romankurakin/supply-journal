import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Segment, Table } from "semantic-ui-react";

import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import {
  paginatedSupplySelector,
  currentPageSelector,
  setCurrentPage
} from "../features/supplyData/supplySlice";

export const PaginatedTable = () => {
  const dispatch = useDispatch();
  const { totalPages, paginatedData } = useSelector(paginatedSupplySelector);
  const currentPage = useSelector(currentPageSelector);

  const handlePaginationChange = (_e, { activePage }) => {
    dispatch(setCurrentPage(activePage));
  };

  return (
    <Fragment>
      <Table compact>
        <TableHeader></TableHeader>
        <TableBody paginatedData={paginatedData}></TableBody>
      </Table>
      <Segment>
        <Pagination
          size="small"
          activePage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePaginationChange}
        />
      </Segment>
    </Fragment>
  );
};