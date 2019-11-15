const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statsSchema = new Schema(
  {
    dna: {
      type: Array
    },
    mutation: {
      type: Boolean
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    },
    versionKey: false
  }
);

module.exports = mongoose.model("Stats", statsSchema);
