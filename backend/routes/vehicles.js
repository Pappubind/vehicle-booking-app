const express = require('express');
const router = express.Router();
const { getVehiclesByType } = require('../controllers/vehiclesController');

router.get('/:type_id', getVehiclesByType);

module.exports = router;
