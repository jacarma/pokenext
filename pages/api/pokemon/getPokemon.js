import { getPokemon } from "./_index.js";
export default (req, res) => {
  //   console.log(req);
  res.send(getPokemon(req.query.name));
};
