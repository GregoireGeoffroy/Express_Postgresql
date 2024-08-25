const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
