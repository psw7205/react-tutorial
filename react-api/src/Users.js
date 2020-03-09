import React, { useState } from "react";
import axios from "axios";
import { useAsync } from "react-async";
import User from "./User";

// 요청을 한 이후 response 에서 data 추출하여 반환
async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

function Users() {
  const [userId, setUserId] = useState(null);
  
  const { data: users, error, isLoading, run } = useAsync({
    deferFn: getUsers
  });

  if (isLoading) return <div>loading..</div>;
  if (error) return <div>error</div>;
  if (!users) return <button onClick={run}>first request</button>;
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={run}>request</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
