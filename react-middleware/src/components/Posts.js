import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../modules/posts";
import { Link } from "react-router-dom";

function PostListContainer() {
  const { data, loading, error } = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // 재로딩 이슈 수정
  // data가 있으면 getPosts를 안하고 기존데이터를 보여주는 방법
  // 서버에서 데이터가 갱신되더라고 기존 데이터가 보여짐
  // useEffect(() => {
  //   if (data) return;
  //   dispatch(getPosts());
  // }, [data, dispatch]);

  // handleAsyncActions에 keepData parameter를 주고
  // 기존 데이터가 있으면 로딩중... 글자 대신 기존 데이터 보여줌
  // 로딩이 끝나면 새로 가져온 데이터 보여주기

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return <PostList posts={data} />;
}

function PostList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default PostListContainer;
