const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const categories = [];
  for (let i = 0; i < 10; i += 1) {
    categories.push({
      id: i,
      name: faker.commerce.productName(),
    });
  }
  res.json(categories);
});

router.get('/:id', (req, res) => {
  res.json({
    id: req.params.id,
    name: faker.commerce.productName(),
  });
});

module.exports = router;
