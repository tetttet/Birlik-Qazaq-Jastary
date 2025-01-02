const express = require('express');
const router = express.Router();
const slideController = require('../controllers/slideController');

router.get('/api/slides', slideController.getSlides);

module.exports = router;
