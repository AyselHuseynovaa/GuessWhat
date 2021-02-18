import React, { useState } from "react";
import Inputbox from "./Inputbox"
const Calculate = () => {
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState("0");
  const [sum, setSum] = useState("");

  const sumHandler = () => {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
    setSum(num1 + num2);
  };

  return (
    <div>
      <button onClick={sumHandler}>Random numbers</button>
      <div>
        Calculate: {num1}+{num2}
      </div>
      <Inputbox sum={sum}/>
    </div>
  );
};
export default Calculate;
