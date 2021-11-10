const Promotion = require('../models/Promotion');

const getAllPromotions = async (req, res) => {
  try {
    const promotions = await Promotion.find({});

    res.json(promotions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error!' });
  }
};

const getPromotionById = async (req, res) => {
  try {
    const promotion = await Promotion.findById(req.params.id);
    res.json(promotion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error!' });
  }
};

module.exports = {
  getAllPromotions,
  getPromotionById,
};
