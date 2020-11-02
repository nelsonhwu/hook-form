import React, { useState } from "react";
import UserComponent from "./Components/UserComponent";
import Results from "./Components/Results";
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="App">
      <UserComponent inputs={state} setInputs={setState} />
      <Results data={state} />
    </div>
  );
}

export default App;
