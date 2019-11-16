const Stats = require("../models/Stats");
const {
  buildChainHorizontal,
  buildChainVertical,
  buildChainOblique
} = require("../service/sequence");

exports.hasMutation = async dna => {
  console.log(dna);

  let count = 0;
  let response = "";
  let horizontal = await buildChainHorizontal(dna);
  let vertical = await buildChainVertical(dna);
  let diagonalLeft = await buildChainOblique(dna);
  let diagonalRight = await buildChainOblique(dna, true);

  count = horizontal + vertical + diagonalLeft + diagonalRight;

  count < 2 ? (response = false) : (response = true);

  await Stats.create({ dna, mutation: response });

  return response;
};
