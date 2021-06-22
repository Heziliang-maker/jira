import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { UnAuthicatedApp } from "./pages/unauthicated-app";
import { AuthicatedApp } from "./pages/authicated-app";

import { useAuth } from "./context/AuthContext";
function App() {
  const { user } = useAuth();
  return (

      <div className="App">
        {user ? <AuthicatedApp /> : <UnAuthicatedApp />}
      </div>

  );
}

export default App;
