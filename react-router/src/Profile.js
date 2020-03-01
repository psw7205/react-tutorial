import React from "react";
import WithRouter from "./WithRouter";

// 프로필에서 사용 할 데이터
const profileData = {
  psw7205: {
    name: "박상우",
    description: "psw7205@gmail.com"
  },
  gildong: {
    name: "홍길동",
    description: "전래동화의 주인공"
  }
};

function Profile({ match }) {
  // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouter />
    </div>
  );
}

export default Profile;
