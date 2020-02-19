import React, { useRef, useReducer, useMemo, useCallback } from "react";
import List from "./List";
import useInputs from "./useInputs";

function counteActiveObjs(objs) {
  console.log("counting...");
  return objs.filter(obj => obj.flag).length;
}

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
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

const initialState = {
  objs: [
    {
      id: 1,
      name: "test0",
      address: "test0-address",
      flag: true
    },
    {
      id: 2,
      name: "test1",
      address: "test1-address",
      flag: false
    },
    {
      id: 3,
      name: "test2",
      address: "test2-address",
      flag: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_OBJS":
      return {
        objs: state.objs.concat(action.obj)
      };
    case "TOGGLE_OBJS":
      return {
        ...state,
        objs: state.objs.map(obj =>
          obj.id === action.id ? { ...obj, flag: !obj.flag } : obj
        )
      };
    case "REMOVE_OBJS":
      return {
        ...state,
        objs: state.objs.filter(obj => obj.id !== action.id)
      };
    default:
      return state;
  }
}

function CustomHookList() {
  const [{ name, address }, onChange, reset] = useInputs({
    name: "",
    address: ""
  });

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { objs } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_OBJS",
      obj: {
        id: nextId.current,
        name,
        address
      }
    });
    reset();
    nextId.current += 1;
  }, [name, address, reset]);

  const onToggle = useCallback(id => {
    dispatch({
      type: "TOGGLE_OBJS",
      id
    });
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: "REMOVE_OBJS",
      id
    });
  }, []);

  const count = useMemo(() => counteActiveObjs(objs), [objs]);
  return (
    <>
      <div>{count}</div>
      <Inputs
        name={name}
        address={address}
        onChange={onChange}
        onCreate={onCreate}
      />
      <List obj_list={objs} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
}

export default CustomHookList;
