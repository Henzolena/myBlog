const express = require('express');
const router = express.Router();

const contactController = require('../controller/contactController');

router.get('/contact', contactController.getContact);

module.exports = router;