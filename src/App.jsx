import { useState } from "react";
import "./App.css";
import NamePicker from "./components/name.picker";

const students = ["Harry", "Ron", "Hermione", "Neville", "Fred", "George"];

function App() {
  return (
    <>
      <header>
        <h1>Name Picker</h1>
      </header>
      <main>
        <div>
          <NamePicker studentList={students} />
        </div>
      </main>
    </>
  );
}

export default App;
