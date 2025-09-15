const supabase = require('../supabaseClient');

async function createBooking(req, res) {
  const { firstName, lastName, wheels, vehicleType, vehicleModel, startDate, endDate } = req.body;

  try {
    // Check date overlap
    const { data: existingBookings, error: overlapError } = await supabase
      .from('bookings')
      .select('*')
      .eq('vehicleModel', vehicleModel)
      .or(`startDate.lte.${endDate},endDate.gte.${startDate}`);

    if (overlapError) return res.status(500).json({ error: overlapError.message });
    if (existingBookings && existingBookings.length > 0) {
      return res.status(400).json({ error: 'Vehicle is already booked for these dates' });
    }

    // Insert booking and return inserted row
    const { data, error: insertError } = await supabase
      .from('bookings')
      .insert([{
        firstName,
        lastName,
        wheels,
        vehicleType,
        vehicleModel,
        startDate,
        endDate
      }])
      .select(); // <-- important to return inserted row(s)

    if (insertError) return res.status(500).json({ error: insertError.message });
    if (!data || data.length === 0) return res.status(500).json({ error: 'Booking failed' });

    res.json({ message: 'Booking successful', booking: data[0] });
  } catch (err) {
    console.error('Booking error:', err);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { createBooking };
