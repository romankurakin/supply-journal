import React from "react";
import { Router } from "@reach/router";
import { Todo } from "./Todo";
import { SupplyPage } from "./SupplyPage";

// При утяжелении станиц здесь стоит сделать ленивую загрузку.
export function AppRouter() {
  return (
    <div className="App">
      <Router>
        <SupplyPage path="/" />
        <Todo path="/returns" />
        <Todo path="/replenishment" />
      </Router>
    </div>
  );
}
