var express = require('express');

var router = express.Router();

var LoversController = require('../../controllers/LoversController');

router.get('/', LoversController.getLocalLovers);

module.exports = router;
