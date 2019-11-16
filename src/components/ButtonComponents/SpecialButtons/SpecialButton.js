import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className="button" key={props.index}>{props.item}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;