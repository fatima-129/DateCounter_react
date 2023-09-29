import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
const addDays = (days, date) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
const State = {
  INC: "INC",
  DEC: "DEC",
  CUSTOM_INC: "CUSTOM_INC",
  CUSTOM_DEC: "CUSTOM_DEC"
};

function Counter() {
  const [counter, setCounter] = useState(0);
  const date = addDays(counter, "september 29 2023");

  const handleCounter = (action, value) => {
    if (action === State.INC) setCounter(counter + 1);
    if (action === "DEC") setCounter(counter - 1);
    if (action === "CUSTOM_INC") setCounter(counter + value);
    if (action === "CUSTOM_DEC") setCounter(counter - value);
  };
  return (
    <div>
      Counter: {counter}
      <p>{date.toDateString()}</p>
      <button onClick={() => handleCounter("INC")}>INC</button>
      <button onClick={() => handleCounter("DEC")}>DEC</button>
      <button onClick={() => handleCounter("CUSTOM_INC", 20)}>INC BY 20</button>
      <button onClick={() => handleCounter("CUSTOM_DEC", 20)}>INC BY 20</button>
    </div>
  );
}
