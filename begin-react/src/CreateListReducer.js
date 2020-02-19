import React, { useRef, useReducer, useMemo, useCallback } from "react";
import List from "./List";

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
  inputs: {
    name: "",
    address: ""
  },
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
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case "CREATE_OBJS":
      return {
        inputs: initialState.inputs,
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

function CreateListReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { objs } = state;
  const { name, address } = state.inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_OBJS",
      obj: {
        id: nextId.current,
        name,
        address
      }
    });
    nextId.current += 1;
  }, [name, address]);

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

export default CreateListReducer;
