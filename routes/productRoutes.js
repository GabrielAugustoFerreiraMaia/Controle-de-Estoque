const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Criar um novo produto
router.post('/products', async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).send(product);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Listar todos os produtos
router.get('/products', async(req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).send(products);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Atualizar um produto
router.put('/products/:id', async(req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).send();
        await product.update(req.body);
        res.send(product);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Deletar um produto
router.delete('/products/:id', async(req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).send();
        await product.destroy();
        res.send({ message: 'Produto deletado' });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;