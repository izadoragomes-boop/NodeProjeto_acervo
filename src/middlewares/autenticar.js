const jwt = require("jsonwebtoken");

const chave = "acervo-secreto";

function autenticar(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            mensagem: "Token não fornecido"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const dados = jwt.verify(token, chave);

        req.usuario = dados;

        next();

    } catch {

        return res.status(401).json({
            mensagem: "Token inválido"
        });
    }
}

module.exports = autenticar;