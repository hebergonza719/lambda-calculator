import React, {useState} from "react";

const Display = (props) => {
  const [displayNum, setDisplayNum] = useState(0);
  setDisplayNum(displayNum = props.input);
  return <div className="display">{/* Display any props data here */displayNum}</div>;
};

export default Display;