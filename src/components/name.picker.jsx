import { useState } from "react";
import SimpleButton from "./buttons/simple.button";

export default function NamePicker({ studentList }) {
  const [randomName, setRandomName] = useState("");

  function randomNameHandler() {
    const randomIndex = Math.floor(Math.random() * studentList.length);
    setRandomName(studentList[randomIndex]);
  }
  return (
    <>
      <h2>{randomName}</h2>
      <SimpleButton text={"Pick Name"} onClickHandler={randomNameHandler} />
    </>
  );
}
