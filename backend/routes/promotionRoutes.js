const express = require('express');

// create router
const router = express.Router();

const {
  getAllPromotions,
  getPromotionById,
} = require('../cotroller/promotionControllers');

// @desc   GET all promotions from db
// @route  GET /api/promotions
// @access Public

router.get('/', getAllPromotions);

// @desc   GET a promotion by id from db
// @route  GET /api/promotions/:id
// @access Public

router.get('/:id', getPromotionById);

module.exports = router;
