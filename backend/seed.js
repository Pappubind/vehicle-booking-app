const supabase = require('./supabaseClient');

async function seed() {
  // Vehicle Types
  const vehicleTypes = [
    { id: 1, name: 'Hatchback', wheels: 4 },
    { id: 2, name: 'SUV', wheels: 4 },
    { id: 3, name: 'Sedan', wheels: 4 },
    { id: 4, name: 'Cruiser', wheels: 2 }
  ];

  // Vehicles
  const vehicles = [
    { id: 1, model: 'Hyundai i20', type_id: 1 },
    { id: 2, model: 'Maruti Swift', type_id: 1 },
    { id: 3, model: 'Toyota Fortuner', type_id: 2 },
    { id: 4, model: 'Mahindra XUV700', type_id: 2 },
    { id: 5, model: 'Honda City', type_id: 3 },
    { id: 6, model: 'Royal Enfield', type_id: 4 },
    { id: 7, model: 'Bajaj Avenger', type_id: 4 }
  ];

  // Insert vehicle types
  for (let type of vehicleTypes) {
    await supabase.from('vehicle_types').upsert(type);
  }

  // Insert vehicles
  for (let vehicle of vehicles) {
    await supabase.from('vehicles').upsert(vehicle);
  }

  console.log('Seeding completed');
}

seed();
