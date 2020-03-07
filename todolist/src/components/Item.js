import React, { memo } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { darken } from "polished";
import { useTodoDispatch } from "../Context";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.gray};
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.palette.red};
  }
  display: none;
`;

const ItemStyle = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => darken(0.5, theme.palette.gray)};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid ${({ theme }) => theme.palette.blue};
      color: ${({ theme }) => theme.palette.blue};
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: ${({ theme }) => darken(0.5, theme.palette.gray)};
  ${props =>
    props.done &&
    css`
      color: ${({ theme }) => theme.palette.gray};
    `}
`;

function Item({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  return (
    <ItemStyle>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </ItemStyle>
  );
}

export default memo(Item);
