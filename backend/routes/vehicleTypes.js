const express = require('express');
const router = express.Router();
const { getVehicleTypes } = require('../controllers/vehicleTypesController');

router.get('/', getVehicleTypes);

module.exports = router;
