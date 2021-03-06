import React, { useState, useRef } from "react";

function InputsTest() {
  const [inputs, setInputs] = useState({
    name: "",
    address: ""
  });

  const { name, address } = inputs;
  const inputRef = useRef();
  const onChange = e => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const resetInputs = e => {
    setInputs({
      name: "",
      address: ""
    });

    inputRef.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={inputRef}
      />
      <input
        name="address"
        placeholder="주소"
        onChange={onChange}
        value={address}
      />

      <button onClick={resetInputs}>Reset</button>
      <h3>{name}</h3>
      <h4>{address}</h4>
    </div>
  );
}

export default InputsTest;
