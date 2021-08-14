const express = require('express');

// create router
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require('../cotroller/productControllers');

// @desc   GET all products from db
// @route  GET /api/products
// @access Public
router.get('/', getAllProducts);

// @desc   GET a product by id from db
// @route  GET /api/products/:id
// @access Public
router.get('/:id', getProductById);

module.exports = router;
