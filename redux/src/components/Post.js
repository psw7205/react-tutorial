import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost, goToHome } from "../modules/posts";
import { reducerUtils } from "../lib/asyncUtils";

function PostPage({ match }) {
  const { id } = match.params;

  return <PostContainer postId={parseInt(id, 10)} />;
}

function PostContainer({ postId }) {
  const { data, loading, error } = useSelector(
    state => state.posts.post[postId] || reducerUtils.initial()
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      <button onClick={() => dispatch(goToHome())}>홈으로 이동</button>
      <Post post={data} />;
    </>
  );
}

function Post({ post }) {
  const { title, body } = post;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default PostPage;
