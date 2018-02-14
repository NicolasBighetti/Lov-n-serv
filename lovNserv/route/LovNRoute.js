var express = require('express');

var router = express.Router();

var lovers = require('./api/LoversRoad');

router.use('/lovers', lovers);

module.exports = router;
