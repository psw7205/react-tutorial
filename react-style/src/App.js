import React, { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";

function App() {
  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
  };

  return (
    <div className="App">
      <div>
        <CheckBox onChange={onChange} checked={check}>
          다음 약관에 모두 동의
        </CheckBox>
        <p>
          <b>check: </b>
          {check ? "true" : "false"}
        </p>
      </div>

      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button size="small" color="gray">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="blue" outline>
          BUTTON
        </Button>
        <Button color="gray" outline>
          BUTTON
        </Button>
        <Button size="small" color="pink" outline>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth>
          BUTTON
        </Button>
        <Button size="large" fullWidth color="gray">
          BUTTON
        </Button>
        <Button
          size="large"
          fullWidth
          color="pink"
          className="custom-button"
          onClick={() => console.log("click!")}
        >
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
