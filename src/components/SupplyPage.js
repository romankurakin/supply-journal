import React, { useEffect } from "react";
import { Input, Menu, Header } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { fetchSupply } from "../features/supplyData/supplySlice";

export const SupplyPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSupply());
  }, [dispatch]);

  return (
    <Menu secondary>
      <Menu.Item>
        <Header as="h1">Список поставок</Header>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Input
            size="medium"
            icon="filter"
            iconPosition="left"
            placeholder="Данные для фильтрации"
          />
        </Menu.Item>
        <Menu.Item />
      </Menu.Menu>
    </Menu>
  );
};
