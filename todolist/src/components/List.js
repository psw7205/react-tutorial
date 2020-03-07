import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { useTodoState } from "../Context";

const ListStyle = styled.div`
  flex: 1;
  padding: 1.5rem 2rem;
  padding-bottom: 3rem;
  overflow-y: auto;
`;

function List() {
  const todos = useTodoState();

  return (
    <ListStyle>
      {todos.map(todo => (
        <Item key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
      ))}
    </ListStyle>
  );
}

export default List;
