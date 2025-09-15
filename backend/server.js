const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const vehicleTypesRoutes = require('./routes/vehicleTypes');
const vehiclesRoutes = require('./routes/vehicles');
const bookingsRoutes = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Correct route names
app.use('/api/vehicle-types', vehicleTypesRoutes);
app.use('/api/vehicles', vehiclesRoutes);
app.use('/api/bookings', bookingsRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
