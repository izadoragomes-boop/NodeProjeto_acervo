const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const usuarios = require("../dados/usuarios");



/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cadastra um usuário
 *     tags:
 *       - Usuários
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */
router.post("/", async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({
      mensagem: "Nome, email e senha são obrigatórios",
    });
  } //validação

  const emailValido =
    email.includes("@gmail.com") || email.includes("@hotmail.com.br");

  if (!emailValido) {
    return res.status(400).json({
      mensagem: "E-mail inválido",
    });
  }

  const usuarioExistente = usuarios.find((usuario) => usuario.email === email);

  if (usuarioExistente) {
    return res.status(400).json({
      mensagem: "Este e-mail já está cadastrado",
    });
  }

  const senhaCriptografada = await bcrypt.hash(req.body.senha, 10);

  const novoUsuario = {
    id: usuarios.length + 1,
    nome: req.body.nome,
    email: req.body.email,
    senha: senhaCriptografada
  };

  usuarios.push(novoUsuario);

  res.status(201).json(novoUsuario);
});


/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista todos os usuários
 *     tags:
 *       - Usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
router.get("/", (req, res) => {
  const usuariosSemSenha = usuarios.map(usuario => ({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
    }));

    res.json(usuariosSemSenha);
});

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Busca um usuário pelo ID
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 */
router.get("/:id", (req, res) => {
  const usuario = usuarios.find(
    (usuario) => usuario.id === Number(req.params.id),
  );

  if (!usuario) {
    return res.status(404).json({
      mensagem: "Usuário não encontrado",
    });
  }

  res.json({
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email
    });
});

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Atualiza um usuário
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.put("/:id", (req, res) => {
  const usuario = usuarios.find(
    (usuario) => usuario.id === Number(req.params.id),
  );

  if (!usuario) {
    return res.status(404).json({
      mensagem: "Usuário não encontrado",
    });
  }

  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({
      mensagem: "Nome, email e senha são obrigatórios",
    });
  }

  const emailValido =
    email.includes("@gmail.com") || email.includes("@hotmail.com.br");

  if (!emailValido) {
    return res.status(400).json({
      mensagem: "E-mail inválido",
    });
  }

  const usuarioExistente = usuarios.find((usuario) => usuario.email === email);

  if (usuarioExistente) {
    return res.status(400).json({
      mensagem: "Este e-mail já está cadastrado",
    });
  }

  usuario.nome = req.body.nome;
  usuario.email = req.body.email;
  usuario.senha = req.body.senha;

  res.json(usuario);
});


/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Remove um usuário
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário removido com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.delete("/:id", (req, res) => {
  const indice = usuarios.findIndex(
    (usuario) => usuario.id === Number(req.params.id),
  );

  if (indice === -1) {
    return res.status(404).json({
      mensagem: "Usuário não encontrado",
    });
  }

  usuarios.splice(indice, 1);

  res.json({
    mensagem: "Usuário removido com sucesso",
  });
});

module.exports = router;
