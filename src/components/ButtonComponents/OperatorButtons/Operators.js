import React, { useState } from "react";
import { operators } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div className="buttons-right">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorState.map((item, index) => {
        return <button className="button button-color-operators" key={index}>{item.char}</button>;
      })}
    </div>
  );
};

export default Operators;