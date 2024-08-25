const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Get all usernames
async function getAllUsernames() {
  const result = await pool.query('SELECT username FROM usernames');
  return result.rows;
}

// Search for usernames containing a specific substring
async function searchUsernames(searchQuery) {
  const result = await pool.query(
    'SELECT username FROM usernames WHERE username ILIKE $1',
    [`%${searchQuery}%`]
  );
  return result.rows;
}

// Insert a new username into the database
async function insertUsername(username) {
  await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username]);
}

// Delete all usernames from the database
async function deleteAllUsernames() {
  await pool.query('DELETE FROM usernames');
}

module.exports = {
  getAllUsernames,
  searchUsernames,
  insertUsername,
  deleteAllUsernames,
};
