import axios from "axios";

export async function getPosts() {
  const response = await axios.get("/posts");
  return response.data;
}

export async function getPostById(id) {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
}
