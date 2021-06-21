import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProjectList from "./pages/screens/project-list";
import { Test } from "./pages/screens/project-list/index";
import { LoginScreen } from "./pages/screens/login";

function App() {
  return (
    <div className="App">
      {/* <ProjectList /> */}
      <LoginScreen />
    </div>
  );
}

export default App;
