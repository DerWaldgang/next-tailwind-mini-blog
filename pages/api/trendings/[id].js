import data from "../data";

// api/trendings/:id

export default function oneTrendingHandler(req, res) {
  const {
    query: { id },
  } = req;

  const { Trending } = data;

  if (id) {
    const trending = Trending.find((item) => item.id === Number(id) );

    if (trending) return res.status(200).json(trending);
    return res.status(404).json({ message: "data not found!" });
  }
}
