import React from "react";
import { Menu, Header } from "semantic-ui-react";
import { Link } from "@reach/router";

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active item" } : null;
};

const ExactNavLink = props => <Link getProps={isActive} {...props} />;

export const NavigationMenu = () => {
  return (
    <header>
      <Menu>
        <Menu.Item>
          <Header size="medium">Журнал поставок</Header>
        </Menu.Item>
        <Menu.Item as={ExactNavLink} to="/">
          <Header size="small">Данные о поставках</Header>
        </Menu.Item>
        <Menu.Item as={ExactNavLink} to="/returns">
          <Header size="small">Возвраты поставщикам</Header>
        </Menu.Item>
        <Menu.Item as={ExactNavLink} to="/replenishment">
          <Header size="small">Репленишмент</Header>
        </Menu.Item>
      </Menu>
    </header>
  );
};
