import data from "../data";

// api/populars/:id
export default function onePopularHandler(req, res) {
  const {
    query: { id },
  } = req;

  const { Popular } = data;

  if (id) {
    const popular = Popular.find((item) => item.id === Number(id) );

    if (popular) return res.status(200).json(popular);
    return res.status(404).json({ message: "data not found!" });
  }
}