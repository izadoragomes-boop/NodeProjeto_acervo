const express = require("express");

const router = express.Router();


router.post("/", (req, res) => {
  res.send("Item cadastrado");
});

router.get("/", (req, res) => {
  res.send("Lista de itens");
});

router.get("/:id", (req, res) => {
  res.send(`Detalhes do item ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`Item ${req.params.id} atualizado`);
});

router.delete("/:id", (req, res) => {
  res.send(`Item ${req.params.id} removido`);
});




module.exports = router;