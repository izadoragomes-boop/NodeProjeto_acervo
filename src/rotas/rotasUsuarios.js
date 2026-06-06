const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send("Usuário cadastrado");
});

module.exports = router;