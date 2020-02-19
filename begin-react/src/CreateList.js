import React, { useState, useRef, useMemo, useCallback } from "react";
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

function counteActiveObjs(objs) {
  console.log("counting...");
  return objs.filter(obj => obj.flag).length;
}

function CreateList() {
  const nextId = useRef(5);
  const [inputs, setInputs] = useState({
    name: "",
    address: "",
    flag: false
  });

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

  const { name, address } = inputs;

  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({ ...inputs, [name]: value });
    },
    [inputs]
  );

  const onCreate = useCallback(() => {
    setInputs({
      name: "",
      address: ""
    });

    // objs.push({...}) -> 안됨
    // setObjs([...objs, { id: nextId.current, name, address }]);
    setObjs(objs => objs.concat({ id: nextId.current, name, address }));
    nextId.current += 1;
  }, [name, address]);

  const onRemove = useCallback(id => {
    setObjs(objs => objs.filter(obj => obj.id !== id));
  }, []);

  const onToggle = useCallback(
    id => {
      setObjs(objs =>
        objs.map(obj => (obj.id === id ? { ...obj, flag: !obj.flag } : obj))
      );
    },
    []
  );

  const count = useMemo(() => {
    // useMemo가 없으면 CreateList가 바뀔 때마다 (ex: input만 바뀌어도) 계속 호출됨
    // useMemo를 사용해 objs가 바뀔 때만 호출되게 최적화

    counteActiveObjs(objs);
  }, [objs]);

  return (
    <>
      <div>{count}</div>
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

export default React.memo(CreateList);
