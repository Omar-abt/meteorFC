import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Leagues from "./components/Programs";

function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <Leagues />
    </div>
  );
}

export default App;
