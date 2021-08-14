// env config
require('dotenv').config();

// Data
const productsData = require('./data/products');
// DB
const connectDB = require('./config/db');
// Model
const Product = require('./models/Product');

// connect DB
connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productsData);

    console.log('Data import SUCCESS!');

    process.exit();
  } catch (error) {
    console.log('Error with data import!');
    process.exit(1);
  }
};

importData();
