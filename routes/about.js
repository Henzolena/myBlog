const express = require('express');
const router = express.Router();

const aboutController = require('../controller/aboutController')

router.get('/about', aboutController.getAbout);

module.exports = router;
