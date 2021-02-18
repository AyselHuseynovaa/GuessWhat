import React, { useState } from "react";
const Inputbox = ({ sum }) => {
  const [value, setValue] = useState("");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const inputHandler = (e) => {
    setValue(e.target.value);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
   ( sum == value)
      ? setCount1(count1 + 1)
      : setCount2(count2 + 1);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input value={value} onChange={inputHandler} />
        <button>GuessWhat</button>
      </form>
      <div>
          <h2>Correct:{count1}</h2>
          <h2>Wrong:{count2}</h2>
      </div>
    </div>
  );
};
export default Inputbox;