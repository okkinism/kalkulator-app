import React from "react";

const KeyPad = ({ onClick = () => {} }) => {
  //   const keys = [
  //     ["7", "8", "9", "/"],
  //     ["4", "5", "6", "*"],
  //     ["1", "2", "3", "-"],
  //     ["C", "0", ".", "+"],
  //     ["CE", "±", "%", "="],
  //   ];
  const keys = [
    ["±", "1", "5", "9"],
    ["CE", "2", "6", "0"],
    ["%", "3", "7", "."],
    ["C", "4", "8", "="],
    ["+", "-", "*", "/"],
  ];

  return (
    <div className="keypad">
      {keys.map((row) => (
        <div className="keypad-row" key={row.join("")}>
          {row.map((key) => (
            <button
              key={key}
              className="keypad-button"
              onClick={() => onClick(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KeyPad;
