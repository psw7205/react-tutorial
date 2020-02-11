import React from "react";

// function Props(props) {
//   return (
//     <div
//       style={{
//         color: props.color
//       }}
//     >
//       {props.name}
//     </div>
//   );
// }

// 비구조화 할당으로...
function Props({ color, name }) {
  return (
    <div
      style={{
        color
      }}
    >
      {name}
    </div>
  );
}

Props.defaultProps = {
  name: "이름 없음"
};
export default Props;
