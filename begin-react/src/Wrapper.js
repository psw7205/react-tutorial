import React from "react";

// function Wrapper(props) {
//   const style = {
//     border: "3px solid white"
//   };
//   return <div style={style}>{props.children}</div>;
// }

function Wrapper({ children }) {
  const style = {
    border: "3px solid white"
  };
  return <div style={style}>{children}</div>;
}

export default Wrapper;
