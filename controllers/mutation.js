const {
  buildChainHorizontal,
  buildChainVertical,
  buildChainOblique
} = require("../service/sequence");

exports.hasMutation = async dna => {
  // let array = ["ATGCGA","CAGTGC","TAATGT","AGAAGG","CCCCTA","TCACTG"]
  let horizontal = await buildChainHorizontal(dna);
  let vertical = await buildChainVertical(dna);
  await buildChainOblique(dna);

  if (horizontal + vertical < 2) {
    return false;
  } else {
    return true;
  }
};
