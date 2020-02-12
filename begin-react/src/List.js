import React from "react";

function Print({ obj, onRemove, onToggle }) {
  const { id, name, address, flag } = obj;
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
}

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

export default List;
