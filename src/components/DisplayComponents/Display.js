import React, { useState } from "react";

let displayAmount = 0;

const Display = () => {
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