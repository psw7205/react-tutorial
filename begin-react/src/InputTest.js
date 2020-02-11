import React, { useState } from "react";

function InputTest() {
  const [text, setText] = useState("");

  const resetText = () => {
    setText("");
  };

  const changeText = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <input onChange={changeText} value={text} />
      <button onClick={resetText}>Reset</button>
      <h3>{text}</h3>
    </div>
  );
}

export default InputTest;
