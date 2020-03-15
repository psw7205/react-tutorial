# react

[book](https://react.vlpt.us)

[react life-cycle](https://react.vlpt.us/basic/25-lifecycle.html)

[react router](https://reacttraining.com/react-router/web/guides/philosophy)

[react icons](https://react-icons.netlify.com)

[polished](https://polished.js.org/docs/)

[json-server](https://github.com/typicode/json-server) // npx json-server ./data.json --port 4000 // .data.json 파일 기반으로 localhost:4000에 api 서버를 열어줌

---

## redux

[redux-example](https://github.com/reduxjs/redux/tree/master/examples)

action - 상태에 변화가 필요할 때 dispatch에 param으로 전달

type은 필수, 타입을 가지고 리듀서에 작성된 swtch-case 문을 통해 새로운 상태를 만들어 반환

```javascript
{
	type: "ADD_ITEM",
	text: 'add item',
	data: {
		id: 0,
		title: 'action 객체'
	}	
}
```

store - 한 애플리케이션에는 하나의 스토어

subscribe - subscribe에 함수를 전달하면 action이 dispatch 될 때마다 실행

상태는 항상 읽기 전용 spread 연산자 사용해서 불변성 지키기

리듀서는 순수함수 - ajax, random, new Date등은 리듀서 밖에서 처리

---

CSS Module

레거시 프로젝트에 리액트 도입 시

CSS 클래스 네이밍 규칙 자동 생성

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

---

# Life Cycle


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
