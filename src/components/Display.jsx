import React from "react";

const Display = ({ input, result }) => {
  return (
    <div className="display">
      {input}
      {result ? <div className="result-temp">{result} </div> : null}
    </div>
  );
};

export default Display;
