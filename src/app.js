const express = require("express");

const rotasUsuarios = require("./rotas/rotasUsuarios");
const rotasItens = require("./rotas/rotasItens");
const rotasAutent = require("./rotas/rotasAutent");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bem-vindo à API do Acervo de Colecionáveis!");
});


app.use("/usuarios", rotasUsuarios);
app.use("/itens", rotasItens);
app.use("/auth", rotasAutent);



app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

module.exports = app;