// api/trending
import data from "../data";

export default function trendingHandler(req, res) {
  const { Trending } = data;

  if (Trending) return res.status(200).json(Trending);
  return res.status(404).json({ message: "data not found!" });
}
