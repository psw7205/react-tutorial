import React, { useState } from "react";
import axios from "axios";
import useAsync from "./useAsync";
import User from "./UserAsync";

// 요청을 한 이후 response 에서 data 추출하여 반환
async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

function UsersAsync() {
  const [userId, setUserId] = useState(null);
  const [state, refetch] = useAsync(getUsers, [], true);

  const { loading, data: users, error } = state;

  if (loading) return <div>loading..</div>;
  if (error) return <div>error</div>;
  if (!users) return <button onClick={refetch}>first request</button>;
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>request</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default UsersAsync;
