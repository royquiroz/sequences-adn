const express = require("express");
const router = express.Router();

const { hasMutation } = require("../controllers/mutation");

router.post("/mutation/", async (req, res) => {
  let { dna } = req.body;

  if (await hasMutation(dna)) {
    return res.status(403).json({ message: "Con Mutacion" });
  }
  return res.status(200).json({ message: "Sin Mutacion" });
});

module.exports = router;
