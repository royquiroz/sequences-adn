const Stats = require("../models/Stats");

exports.findStats = async () => {
  return Stats.find({}).then(records => {
    // console.log(records);

    let count_mutations = records.filter(r => r.mutation === true).length;
    let count_no_mutation = records.filter(r => r.mutation === false).length;

    return {
      count_mutations,
      count_no_mutation,
      ratio: count_mutations / count_no_mutation
    };
  });
};
