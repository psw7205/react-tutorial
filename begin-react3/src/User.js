import React from 'react';

function User({ user }) {
  // 오류는 발생하지 않음
  // if (!user) {
  //   return null;
  // }

  return (
    <div>
      <b>ID</b>: {user.id}
      <b>Username:</b> {user.username}
    </div>
  );
}

export default User;
