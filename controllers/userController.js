const path = require('path');
const db = require("../db/queries");

// Get all usernames from the database and log them
async function getUsernames(req, res) {
  try {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map(user => user.username).join(", "));
  } catch (error) {
    console.error("Error fetching usernames:", error);
    res.status(500).send("Error fetching usernames");
  }
}

// Render the form for creating a new username
async function createUsernameGet(req, res) {
  res.sendFile(path.join(__dirname, '../views/form.html'));
}

// Insert a new username into the database
async function createUsernamePost(req, res) {
  const { username } = req.body;
  try {
    await db.insertUsername(username);
    res.redirect("/");
  } catch (error) {
    console.error("Error saving username:", error);
    res.status(500).send("Error saving username");
  }
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost
};
