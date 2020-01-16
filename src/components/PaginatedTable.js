import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Segment } from "semantic-ui-react";

import {
  paginatedSupplySelector,
  currentPageSelector,
  setCurrentPage
} from "../features/supplyData/supplySlice";

export const PaginatedTable = () => {
  const dispatch = useDispatch();
  const { totalPages, paginatedData } = useSelector(paginatedSupplySelector);
  const currentPage = useSelector(currentPageSelector);

  const handlePaginationChange = (e, { activePage }) => {
    dispatch(setCurrentPage(activePage));
  };

  return (
    <Segment>
      <Pagination
        size="small"
        activePage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePaginationChange}
      />
    </Segment>
  );
};
