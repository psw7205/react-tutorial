import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { lighten, darken } from "polished";

const FormButton = styled.button`
  background: ${({ theme }) => theme.palette.blue};
  &:hover {
    background: ${({ theme }) => lighten(0.1, theme.palette.blue)};
  }

  &:active {
    background: ${({ theme }) => theme.palette.red};
  }

  z-index: 5;
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: ${({ theme }) => theme.palette.red};
      &:hover {
        background: ${({ theme }) => lighten(0.1, theme.palette.red)};
      }

      &:active {
        background: ${({ theme }) => theme.palette.blue};
      }

      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const FormStyle = styled.form`
  background: ${({ theme }) => darken(0.1, theme.palette.gray)};
  padding: 2rem 2rem 4rem;

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.palette.gray};
  width: 100%;
  outline: none;
  font-size: 1.25rem;
  box-sizing: border-box;
`;

function CreateForm() {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <FormStyle>
          <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
        </FormStyle>
      )}
      <FormButton onClick={onToggle} open={open}>
        <MdAdd />
      </FormButton>
    </>
  );
}

export default CreateForm;
