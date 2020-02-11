import React from "react";
import "./ClassStyle.css";

function ClassStyle() {
  const name = "Park Sang Woo";
  const style = {
    backgroundColor: "gray",
    color: "wihte",
    fontSize: 24,
    padding: "1rem "
  };

  return (
    <>
      {/* 주석 */}
      <div
      // 태그 속에서는 한 줄 주석 가능
      >
        // 주석 X
      </div>
      <div style={style}> {name} </div>
      <div className="class-name"></div>
    </>
  );
}

export default ClassStyle;
