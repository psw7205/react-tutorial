import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import Profile from "./Profile";
import WithRouter from "./WithRouter";
import RouterHook from "./RouterHook";

function Profiles() {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/psw7205"
            activeStyle={{ background: "black", color: "white" }}
          >
            박상우
          </NavLink>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <WithRouter />
      <RouterHook />
    </div>
  );
}

export default Profiles;
