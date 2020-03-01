react

[book](https://react.vlpt.us)

[react life-cycle](https://react.vlpt.us/basic/25-lifecycle.html)

[reacte router](https://reacttraining.com/react-router/web/guides/philosophy)

---

react-router - 컴포넌트 기반으로 라우팅

next.js ssr, 파일 경로기반 라우팅

---

prettier

- .prettierrc 파일을 통해 설정

eslint

- package.json - eslintconfig - extends: react-app

- create-react-app으로 생성시 기본 설정들은 위에 불러와짐

- airbnb, google 등 회사들 규칙들 추가 가능

- ```bash
  yarn add eslint-config-prettier
  ```

- prettier에서 사용 가능한 설정은 비활성화


## 마운트
- constructor 컴포넌트가 만들어지면 가장 먼저 실행
- getDerivedStateFromProps props 로 받아온 것을 state 에 넣어주고 싶을 때 사용
- render 컴포넌트 렌더링
- componentDidMount 컴포넌트의 첫번째 렌더링이 마치고 나면 호출

## 업데이트

- getDerivedStateFromProps props 로 받아온 것을 state 에 넣어주고 싶을 때 사용
- shouldComponentUpdate 메서드는 컴포넌트가 리렌더링 할지 말지를 결정
- render 컴포넌트 렌더링
- getSnapshotBeforeUpdate DOM 업데이트가 일어나기 직전
- componentDidUpdate 리렌더링이 마치고, 화면에 우리가 원하는 변화가 모두 반영되고 난 뒤 호출

## 언마운트

- componentWillUnmount 컴포넌트가 화면에서 사라지기 직전
