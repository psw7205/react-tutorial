import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Profiles from "./Profiles";
import History from "./History";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">사용자 소개</Link>
        </li>
        <li>
          <Link to="/profile/psw7205">박상우</Link>
        </li>
        <li>
          <Link to="/profile/홍길동">홍길동</Link>
        </li>
        <li>
          <Link to="/history">histroy 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        {/* 완전히 일치하는 경우 exact */}
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={History} />
        <Route
          // path 를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
