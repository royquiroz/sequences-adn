const { buildChains, horizontalSequence } = require("../service/sequence")

exports.hasMutation = (dna) => {
    // let array = ["ATGCGA","CAGTGC","TAATGT","AGAAGG","CCCCTA","TCACTG"]
    buildChains(dna)

    let count = 0;

    dna.forEach(e => {
        let info = horizontalSequence(e)
        if (info) count += 1
    })

    console.log(count);
    if(count < 2){
        return false
    }
    return true
}