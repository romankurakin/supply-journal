import React from "react";
import { Menu, Header, Button, Icon } from "semantic-ui-react";
import { Link } from "@reach/router";

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active item" } : null;
};

const ExactNavLink = (props) => <Link getProps={isActive} {...props} />;

export const NavigationMenu = () => {
  return (
    <header>
      <Menu borderless>
        <Menu.Item as={ExactNavLink} to="/">
          <Header>Данные о поставках</Header>
        </Menu.Item>
        <Menu.Item as={ExactNavLink} to="/returns">
          <Header>Возвраты поставщикам</Header>
        </Menu.Item>
        <Menu.Item as={ExactNavLink} to="/replenishment">
          <Header>Репленишмент</Header>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button.Group>
              <Button color="blue">
                <Icon name="user" />
                Владимир Конев
              </Button>
              <Button>
                <Icon name="sign-out" />
                Выйти
              </Button>
            </Button.Group>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </header>
  );
};
