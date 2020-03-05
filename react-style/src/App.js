import React, { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import Circle from "./components/Circle";
import styled, { ThemeProvider } from "styled-components";
import StyledButton from "./components/StyledButton";
import Dialog from "./components/Dialog";

const StyledContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
  };

  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log("확인");
    setDialog(false);
  };
  const onCancel = () => {
    console.log("취소");
    setDialog(false);
  };

  return (
    <div className="App">
      <div>
        <ThemeProvider
          theme={{
            palette: {
              blue: "#228be6",
              gray: "#495057",
              pink: "#f06595"
            }
          }}
        >
          <>
            <StyledButton fullWidth outline onClick={onClick}>
              Open Modal
            </StyledButton>
            <Dialog
              title="정말로 삭제하시겠습니까?"
              confirmText="삭제"
              cancelText="취소"
              onConfirm={onConfirm}
              onCancel={onCancel}
              visible={dialog}
            >
              데이터를 정말로 삭제하시겠습니까?
            </Dialog>
            <StyledContainer>
              <StyledButton fullWidth outline>
                Button
              </StyledButton>
              <StyledButton fullWidth>Button</StyledButton>
              <StyledButton outline>Button</StyledButton>
              <StyledButton>Button</StyledButton>
              <StyledButton color="gray">BUTTON</StyledButton>
              <StyledButton color="pink">BUTTON</StyledButton>
            </StyledContainer>
            <StyledContainer>
              <StyledButton size="lg" color="gray" outline>
                BUTTON
              </StyledButton>
              <StyledButton size="lg" color="gray">
                BUTTON
              </StyledButton>
              <StyledButton size="sm" color="pink">
                BUTTON
              </StyledButton>
            </StyledContainer>
          </>
        </ThemeProvider>
        <Circle color="black" />
        <Circle color="blue" big />
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
