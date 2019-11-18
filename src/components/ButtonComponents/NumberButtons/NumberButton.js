import React from "react";
import { ChangeDisplay } from "../../DisplayComponents/Display";

const NumberButton = (props) => {
  return (
    <>
      {/* index was needed, otherwise it wouldn't know what index to place */}
      <button className="button button-color-number" key={props.index} onClick={(event) => 
        {ChangeDisplay(props.item);}
      }>{props.item}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;