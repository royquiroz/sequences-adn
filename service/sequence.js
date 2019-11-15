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

exports.buildChainOblique = (array, bottomToTop) => {
  var maxLength = Math.max(array[0].length, array.length);
  var temp;
  var diagonal = [];
  for (var k = 0; k <= 2 * (maxLength - 1); ++k) {
    temp = [];
    for (var y = array.length - 1; y >= 0; --y) {
      var x = k - (bottomToTop ? array.length - y : y);
      if (x >= 0 && x < array[0].length) {
        temp.push(array[y][x]);
      }
    }
    if (temp.length > 0) {
      diagonal.push(temp.join(""));
    }
  }

  let count = 0;

  diagonal.forEach(e => {
    let info = validateSequence(e);
    if (info) count += 1;
  });

  return count;
};

function validateSequence(string) {
  let bases = {};
  string.split("").forEach(letter => {
    bases[letter] = (bases[letter] || 0) + 1;
  });
  // console.log(bases);
  return Object.values(bases).includes(4);
}
