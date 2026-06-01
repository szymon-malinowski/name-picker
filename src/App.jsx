import { useState } from "react";
import "./App.css";

const students = ["Harry", "Ron", "Hermione", "Neville", "Fred", "George"];

function App() {
  return (
    <>
      <h1>Name Picker</h1>
      <p>{students}</p>
    </>
  );
}

export default App;
