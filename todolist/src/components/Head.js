import React from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";

const HeadStyle = styled.div`
  padding: 3rem 2rem 2rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => lighten(0.1, theme.palette.gray)};
  h1 {
    margin: 0;
    font-size: 36px;
    color: ${({ theme }) => theme.palette.black};
  }
  .day {
    margin-top: 4px;
    color: ${({ theme }) => darken(0.5, theme.palette.gray)};
    font-size: 21px;
  }
  .todo-tasks {
    color: ${({ theme }) => theme.palette.blue};
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function Head() {
  let date = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  }).format(new Date());
  date = date.split(" ");
  const day = date.pop();
  const today = date.join(" ");

  return (
    <HeadStyle>
      <h1>{today}</h1>
      <div className="day">{day}</div>
      <div className="todo-tasks">할 일 2개 남음</div>
    </HeadStyle>
  );
}

export default Head;
