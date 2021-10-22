const express = require('express');

const ProductService = require('./../services/product.service');

const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const productCreated = await service.create(body);
  res.status(201).json(productCreated);
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const productUpdated = await service.update(id, body);
    res.json(productUpdated);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const index = await service.delete(id);
  res.json(index);
});

module.exports = router;
