import React from "react";
import styled from "styled-components";
import Item from "./Item";

const ListStyle = styled.div`
  flex: 1;
  padding: 1.5rem 2rem;
  padding-bottom: 3rem;
  overflow-y: auto;
`;

function List() {
  return (
    <ListStyle>
      <Item text="Sample Text 1" done={true} />
      <Item text="Sample Text 2" done={true} />
      <Item text="Sample Text 3" done={false} />
      <Item text="Sample Text 4" done={false} />
    </ListStyle>
  );
}

export default List;
