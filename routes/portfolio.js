const express = require('express');
const router = express.Router();

const portfolioController = require('../controller/portfolioController');

router.get('/portfolio', portfolioController.getPortfolio);

module.exports = router;