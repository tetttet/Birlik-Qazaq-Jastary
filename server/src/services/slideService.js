const slideModel = require('../models/slideModel');

const getAllSlides = async () => {
  try {
    const slides = await slideModel.getSlides();
    return slides;
  } catch (err) {
    console.error('Error in service layer:', err);
    throw err;
  }
};

module.exports = {
  getAllSlides,
};
