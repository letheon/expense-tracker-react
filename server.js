const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const mountRoutes = require('./routes');

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());

mountRoutes(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`[Express] Server listening on http://localhost:${PORT}`.yellow.bold);
});
