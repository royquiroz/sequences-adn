const express = require("express");
const router = express.Router();

const { hasMutation } = require("../controllers/mutation");
const { findStats } = require("../controllers/stats");
const { stringValidation } = require("../helpers/validations");

router.post("/mutation/", async (req, res) => {
  let { dna } = req.body;

  if (stringValidation(dna)) {
    return res.status(404).json({ message: "Caracter no valido" });
  }

  if (await hasMutation(dna)) {
    return res.status(403).json({ message: "Con Mutacion" });
  }
  return res.status(200).json({ message: "Sin Mutacion" });
});

router.get("/stats", async (req, res) => {
  let result = await findStats();
  res.status(200).json({ result });
});

module.exports = router;
