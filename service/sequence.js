exports.buildChainHorizontal = async array => {
  let horizontal = array;

  let count = 0;

  horizontal.forEach(e => {
    let info = validateSequence(e);
    if (info) count += 1;
  });

  // console.log(horizontal);
  return count;
};

exports.buildChainVertical = array => {
  let pieces = [];
  let vertical = [];

  array.forEach(e => {
    pieces.push(e.split(""));
  });

  // console.log(pieces);

  pieces.forEach((e, i) => {
    let string = "";
    pieces.forEach((u, j) => {
      string += pieces[j][i];
      if (string.length === e.length) vertical.push(string);
    });
  });

  let count = 0;

  vertical.forEach(e => {
    let info = validateSequence(e);
    if (info) count += 1;
  });

  // console.log(vertical);
  return count;
};

exports.buildChainOblique = array => {
  let pieces = [];
  let oblique = [];

  array.forEach(e => {
    pieces.push(e.split(""));
  });

  console.log(pieces);

  pieces.forEach((e, i) => {
    let string = "";
    pieces.forEach((u, j) => {
      if (j === i) string += pieces[j][i];
      if (j === e.length - 1) string += pieces[i][j - i];
    });
    oblique.push(string);
  });

  let count = 0;

  // oblique.forEach(e => {
  //   let info = validateSequence(e);
  //   if (info) count += 1;
  // });

  console.log(oblique);
  return count;
};

function validateSequence(string) {
  let bases = {};
  string.split("").forEach(letter => {
    bases[letter] = (bases[letter] || 0) + 1;
  });
  console.log(bases);
  return Object.values(bases).includes(4);
}
