const slideService = require('../services/slideService');

const getSlides = async (req, res) => {
  try {
    const slides = await slideService.getAllSlides();
    res.json(slides);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch slides' });
  }
};

module.exports = {
  getSlides,
};
