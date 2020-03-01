import React from "react";
import { withRouter } from "react-router-dom";
const WithRouter = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      {/* 어디서나 같은 위치 */}
      <textarea value={JSON.stringify(location, null, 2)} readOnly />
      <h4>match</h4>
      {/* 사용된 컴포넌트 위치 */}
      <textarea value={JSON.stringify(match, null, 2)} readOnly />
      <button onClick={() => history.push("/")}>홈으로</button>
    </div>
  );
};

export default withRouter(WithRouter);
