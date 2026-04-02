const express = require('express');
const router = express.Router();
const { getAllPrices } = require('../services/price.store');

router.get('/price', (req, res) => {
    res.json(getAllPrices());
});

module.exports = router;