const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const connectdb = require("../src/db")
const bookRouter = require('../src/Routes/booksRoutes')

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors'); // Import the cors middleware
// Middleware to enable CORS for all routes
app.use(cors({ origin: 'http://localhost:5173' })); 

// Books router for /books endpoint
app.use('/', bookRouter);

app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

connectdb();
