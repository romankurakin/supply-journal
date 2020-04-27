import React from "react";
import { NavigationMenu } from "./components/NavigationMenu";
import { AppRouter } from "./components/AppRouter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <AppRouter />
    </div>
  );
}

export default App;
