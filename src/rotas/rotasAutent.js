const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

const usuarios = require("../dados/usuarios");
const chave = "acervo-secreto";

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Realiza login do usuário
 *     tags:
 *       - Autenticação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Email ou senha inválidos
 */
router.post("/login", async(req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({
      mensagem: "Email e senha são obrigatórios",
    });
  }

  const usuario = usuarios.find(usuario => usuario.email === email);

  if (!usuario) {
    return res.status(401).json({
        mensagem: "Email ou senha inválidos"
    });
  }

  const senhaValida = await bcrypt.compare(
    senha,
    usuario.senha
  );

  if (!senhaValida) {
    return res.status(401).json({
        mensagem: "Email ou senha inválidos"
    });
  }

  const token = jwt.sign(
    {
        id: usuario.id,
        email: usuario.email
    },
    chave,
    {
        expiresIn: "1h"
    }
);


  res.json({
    mensagem: "Login realizado com sucesso", token
  });


});

module.exports = router;
