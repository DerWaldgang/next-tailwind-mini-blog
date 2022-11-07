const baseURL = "http://localhost:3000/api/posts";

export default async function getPosts(id) {
  const response = await fetch(`${baseURL}`);
  const posts = await response.json();

  if (id) {
    return posts.find((item) => Number(item.id) === Number(id));
  }

  return posts;
}
