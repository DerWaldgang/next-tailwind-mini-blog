import data from "../data";

// api/posts/post/1
export default function onePostHandler(req, res) {
  const {
    query: { id },
  } = req;

  const { Posts } = data;

  if (id) {
    const post = Posts.find((item) => item.id === Number(id) );

    if (post) return res.status(200).json(post);
    return res.status(404).json({ message: "data not found!" });
  }
}
