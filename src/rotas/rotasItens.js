const express = require("express");

const router = express.Router();

const itens = require("../dados/itens");

const autenticar = require("../middlewares/autenticar");

/**
 * @swagger
 * /itens:
 *   post:
 *     summary: Cadastra um item
 *     tags:
 *       - Itens
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               categoria:
 *                 type: string
 *               descricao:
 *                 type: string
 *               imagem:
 *                 type: string
 *     responses:
 *       201:
 *         description: Item criado com sucesso
 */

router.post("/", autenticar, (req, res) => {

    const { nome, categoria, descricao } = req.body;

    if (!nome || !categoria || !descricao) {
        return res.status(400).json({
            mensagem: "Nome, categoria e descrição são obrigatórios"
        });
    }//validação

    const novoItem = {
        id: itens.length + 1,
        nome: req.body.nome,
        categoria: req.body.categoria,
        descricao: req.body.descricao,
        imagem: req.body.imagem
    };

    itens.push(novoItem);

    res.status(201).json(novoItem);
});


/**
 * @swagger
 * /itens:
 *   get:
 *     summary: Lista todos os itens
 *     tags:
 *       - Itens
 *     responses:
 *       200:
 *         description: Lista de itens retornada com sucesso
 */

router.get("/", (req, res) => {
    res.json(itens);
});


/**
 * @swagger
 * /itens/{id}:
 *   get:
 *     summary: Busca um item pelo ID
 *     tags:
 *       - Itens
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item encontrado
 *       404:
 *         description: Item não encontrado
 */

router.get("/:id", (req, res) => {

    const item = itens.find(
        item => item.id === Number(req.params.id)
    );

    if (!item) {
        return res.status(404).json({
            mensagem: "Item não encontrado"
        });
    }

    res.json(item);
});


/**
 * @swagger
 * /itens/{id}:
 *   put:
 *     summary: Atualiza um item
 *     tags:
 *       - Itens
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
 *               categoria:
 *                 type: string
 *               descricao:
 *                 type: string
 *               imagem:
 *                 type: string
 *     responses:
 *       200:
 *         description: Item atualizado com sucesso
 *       404:
 *         description: Item não encontrado
 */

router.put("/:id", autenticar, (req, res) => {

    const item = itens.find(
        item => item.id === Number(req.params.id)
    );

    if (!item) {
        return res.status(404).json({
            mensagem: "Item não encontrado"
        });
    }

    const { nome, categoria, descricao } = req.body;

    if (!nome || !categoria || !descricao) {
        return res.status(400).json({
            mensagem: "Nome, categoria e descrição são obrigatórios"
        });
    }

    item.nome = req.body.nome || item.nome;
    item.categoria = req.body.categoria || item.categoria;
    item.descricao = req.body.descricao || item.descricao;
    item.imagem = req.body.imagem || item.imagem;

    res.json(item);
});

/**
 * @swagger
 * /itens/{id}:
 *   delete:
 *     summary: Remove um item
 *     tags:
 *       - Itens
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item removido com sucesso
 *       404:
 *         description: Item não encontrado
 */

router.delete("/:id", autenticar, (req, res) => {

    const indice = itens.findIndex(
        item => item.id === Number(req.params.id)
    );

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Item não encontrado"
        });
    }

    itens.splice(indice, 1);

    res.json({
        mensagem: "Item removido com sucesso"
    });
});

module.exports = router;