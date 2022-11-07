import data from "../data";

// api/populars/
export default function popularHandler(req, res) {
  const { Popular } = data;

  if (Popular) return res.status(200).json(Popular);
  return res.status(404).json({ message: "data not found!" });
}
