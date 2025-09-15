const supabase = require('../supabaseClient');

async function getVehiclesByType(req, res) {
  const { type_id } = req.params;

  try {
    const { data, error } = await supabase
      .from('vehicles')
      .select('*')
      .eq('type_id', type_id);

    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error('Error fetching vehicles:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { getVehiclesByType };
