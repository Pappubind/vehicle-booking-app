const supabase = require('../supabaseClient');

async function getVehicleTypes(req, res) {
  try {
    const { data, error } = await supabase.from('vehicle_types').select('*');
    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error('Error fetching vehicle types:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { getVehicleTypes };
