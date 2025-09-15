require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // required for Supabase
});

client.connect()
  .then(() => console.log('✅ Connected to Supabase Postgres!'))
  .then(() => client.query('SELECT NOW()'))
  .then(res => {
    console.log('Server time:', res.rows[0]);
  })
  .catch(err => console.error('❌ Connection error:', err.message))
  .finally(() => client.end());
