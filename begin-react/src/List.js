import React, { useEffect } from "react";

const Print = React.memo(function Print({ obj, onRemove, onToggle }) {
  const { id, name, address, flag } = obj;

  useEffect(() => {
    // 화면에 나타난 후
    // 그려진 이후이기 때문에 Dom에 접근도 가능
    // props -> state
    // REST API, Library
    // setInterval, setTimeout
    return () => {
      // 화면에 사라질 때, 업데이트 직전에
      // Library instance 제거
      // clearInterval, clearTimeout
    };

    // 빈 배열이면 최초에 한번 나타날 때만
    // user 등 인자를 넘겨주면 해당 값이 변경될 때
  }, []);

  return (
    <div>
      <b
        style={{ color: flag ? "black" : "gray", cursor: "pointer" }}
        onClick={() => onToggle(id)}
      >
        {id}
      </b>{" "}
      -{" "}
      <span>
        {name}/{address}
      </span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});

function List({ obj_list, onRemove, onToggle }) {
  return (
    <div>
      {obj_list.map(obj => (
        <Print obj={obj} key={obj.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
      <hr />
    </div>
  );
}

export default React.memo(List);
