import React, { useReducer, useMemo } from "react";
import produce from "immer";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import Hello from "./ClassHello";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: "sample1",
      email: "sample1@sample.com",
      active: true
    },
    {
      id: 2,
      username: "sample2",
      email: "sample2@sample.com",
      active: false
    },
    {
      id: 3,
      username: "sample3",
      email: "sample3@sample.com",
      active: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return produce(state, draft => {
        draft.users.push(action.user);
      });

    // return {
    //   users: state.users.concat(action.user)
    // };

    case "TOGGLE_USER":
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    // return {
    //   ...state,
    //   users: state.users.map(user =>
    //     user.id === action.id ? { ...user, active: !user.active } : user
    //   )
    // };

    case "REMOVE_USER":
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      });
    // return {
    //   ...state,
    //   users: state.users.filter(user => user.id !== action.id)
    // };
    default:
      return state;
  }
}

// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <Hello />
      <Hello name="Class Component" flag />
      <UserDispatch.Provider value={dispatch}>
        <CreateUser />
        <UserList users={users} />
        <div>활성사용자 수 : {count}</div>
      </UserDispatch.Provider>
    </>
  );
}

export default App;
