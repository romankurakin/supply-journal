import React, { useEffect, Fragment } from "react";
import { Input, Menu, Header, Segment } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSupply, setSearchText } from "../features/supplyData/supplySlice";
import { PaginatedTable } from "./PaginatedTable";

export const SupplyPage = () => {
  const dispatch = useDispatch();
  const searchText = useSelector(state => state.supplyData.searchText);

  useEffect(() => {
    dispatch(fetchSupply());
  }, [dispatch]);

  return (
    <Fragment>
      <Segment>
        <Menu secondary borderless>
          <Menu.Item>
            <Header as="h1">Список поставок</Header>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input
                value={searchText}
                icon="filter"
                iconPosition="left"
                placeholder="Данные для фильтрации"
                onChange={e => {
                  dispatch(setSearchText(e.target.value));
                }}
              />
            </Menu.Item>
            <Menu.Item />
          </Menu.Menu>
        </Menu>
        <PaginatedTable />
      </Segment>
    </Fragment>
  );
};
