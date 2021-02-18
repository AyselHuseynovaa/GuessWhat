import React, { createContext, useState } from "react";

export const CalculateContext = createContext();
export const CalculateContextProvider = (props) => {
  const [sum, setSum] = useState("");

  return (
    <CalculateContext.Provider value={[sum, setSum]}>
      {props.children}
    </CalculateContext.Provider>
  );
};
