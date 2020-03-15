import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost, clearPost } from "../modules/posts";

function PostPage({ match }) {
  const { id } = match.params;

  return <PostContainer postId={parseInt(id, 10)} />;
}

function PostContainer({ postId }) {
  const { data, loading, error } = useSelector(state => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));

    // 언마운트 될 때 기존 포스트 내용 비우기
    return () => {
      dispatch(clearPost());
    };
  }, [postId, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <Post post={data} />;
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
