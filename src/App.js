import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Leagues from "./components/Programs";
import Fields from "./components/Fields"
import Team from "./components/Team"

function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <Leagues />
      <Fields />
      <Team />
    </div>
  );
}

export default App;
