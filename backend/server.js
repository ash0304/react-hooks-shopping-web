require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const promotionRoutes = require('./routes/promotionRoutes');

connectDB();

const app = express();

// use express json data
app.use(express.json());

// get products from routes
app.use('/api/products', productRoutes);
// get promotions from routes
app.use('/api/promotions', promotionRoutes);

// link with heroku when NODE_ENV is production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API running');
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
