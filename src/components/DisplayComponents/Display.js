import React, { useState } from "react";

const Display = () => {
  const [displayAmount, setDisplayAmount] = useState(0);
  return <div className="display">{displayAmount}</div>;
};

export const ChangeDisplay = (input) => {
  const display = document.querySelector('.display');
  if(display.textContent == 0) {
    display.textContent = input;
  } else {
    display.textContent = display.textContent + input;  
  };
};

export default Display;