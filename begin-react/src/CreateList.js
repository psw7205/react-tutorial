import React, { useState, useRef } from "react";
import List from "./List";

function Inputs({ name, address, onChange, onCreate }) {
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        name="address"
        placeholder="주소"
        onChange={onChange}
        value={address}
      />

      <button onClick={onCreate}>Create</button>
      <h3>{name}</h3>
      <h4>{address}</h4>
    </div>
  );
}

function CreateList() {
  const nextId = useRef(5);
  const [inputs, setInputs] = useState({
    name: "",
    address: "",
    flag: false
  });

  const { name, address } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onCreate = () => {
    setInputs({
      name: "",
      address: ""
    });

    // objs.push({...}) -> 안됨
    // setObjs([...objs, { id: nextId.current, name, address }]);
    setObjs(objs.concat({ id: nextId.current, name, address }));
    nextId.current += 1;
  };

  const onRemove = id => {
    setObjs(objs.filter(obj => obj.id !== id));
  };

  const onToggle = id => {
    setObjs(
      objs.map(obj => (obj.id === id ? { ...obj, flag: !obj.flag } : obj))
    );
  };

  const [objs, setObjs] = useState([
    {
      id: 1,
      name: "first",
      address: "123Address",
      flag: true
    },
    {
      id: 2,
      name: "second",
      address: "456Address",
      flag: false
    },
    {
      id: 3,
      name: "third",
      address: "789Adress",
      flag: false
    },
    {
      id: 4,
      name: "fourth",
      address: "1011Address",
      flag: false
    }
  ]);

  return (
    <>
      <Inputs
        name={name}
        address={address}
        onChange={onChange}
        onCreate={onCreate}
      />
      <List obj_list={objs} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default CreateList;
