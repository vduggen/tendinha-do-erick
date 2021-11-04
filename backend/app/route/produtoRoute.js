const express = require('express');
const router = express.Router();
const produtoService = require('../service/produtoService');

router.get('/produto', async function (req, res) {
    const produtos = await produtoService.getAll();
    res.json(produtos);
});

router.get('/produto/:id', async function (req, res) {
    const produto = await produtoService.get(req.params.id);
    res.json(produto);
});

router.post('/produto', async function (req, res) {

    const produtoInserido = await produtoService.save(req.body);
    res.json(
        {
            message: 'produto inserido com sucesso',
            produto: produtoInserido
        });
});

module.exports = router;