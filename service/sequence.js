exports.buildChains = (array) => {
    console.log(array);
    let horizontalSequence = array;
    let caja1 = []
    let caja2 = []

    let verticalSequence = array.forEach(e => {
        caja1.push(e.split(''))
    })
    console.log(caja1);
}

exports.horizontalSequence = (string) => {
    let bases = {};
    string.split('').forEach(letter => {
        bases[letter] = (bases[letter] || 0) + 1;
    });
    console.log(bases)
    return Object.values(bases).includes(4)
}

exports.verticalSequence = () => {

}

exports.obliqueSequence = () => {

}