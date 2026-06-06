const express = require("express");

const rotasUsuarios = require("./rotas/rotasUsuarios");
const rotasItens = require("./rotas/rotasItens");
const rotasAutent = require("./rotas/rotasAutent");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bem-vindo à API do Acervo de Colecionáveis!");
});

app.use("/usuarios", rotasUsuarios);
app.use("/itens", rotasItens);
app.use("/auth", rotasAutent);

module.exports = app;