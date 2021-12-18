import { getPokemon } from "./_index";
export default (req, res) => {
  //   console.log(req);
  res.send(getPokemon(req.query.name));
};
