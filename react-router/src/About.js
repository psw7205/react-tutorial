import React from "react";

// 쿼리 파싱 라이브러리
import qs from "qs";

function About({ location }) {
  // 쿼리스트링=> location["search"]
  const query = qs.parse(location.search, {
    // ? 제거
    ignoreQueryPrefix: true
  });
  console.log(location.search);
  console.log(query);

  // 쿼리스트링은 전부 문자열
  const detail = query.detail === "true";

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
      {detail && <p>deatail is 'true'</p>}
    </div>
  );
}

export default About;
