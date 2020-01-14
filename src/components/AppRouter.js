import React from "react";
import { Router } from "@reach/router";
import { Todo } from "./Todo";

const Lol = () => <div>lol</div>;

// При утяжеление станиц здесь стоит сделать ленивую загрузку.
export function AppRouter() {
  return (
    <div className="App">
      <Router>
        <Lol path="/" />
        <Todo path="/returns" />
        <Todo path="/replenishment" />
      </Router>
    </div>
  );
}
