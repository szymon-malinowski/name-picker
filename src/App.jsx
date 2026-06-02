import { useState } from "react";
import "./App.css";
import NamePicker from "./components/name.picker";
import Students from "./components/students";

const studentsArray = ["Harry", "Ron", "Hermione", "Neville", "Fred", "George"];

function App() {
  return (
    <>
      <header></header>
      <main className="flex flex-col justify-center items-center gap 20 h-screen w-screen">
        <h1>Name Picker</h1>
        <div className=" flex flex-col gap-6">
          <Students studentList={studentsArray} />
          <NamePicker studentList={studentsArray} />
        </div>
      </main>
    </>
  );
}

export default App;
