const client = require('../config/db');

const getSlides = async () => {
  try {
    const result = await client.query('SELECT * FROM slides');
    return result.rows;
  } catch (err) {
    console.error('Error fetching slides:', err);
    throw err;
  }
};

module.exports = {
  getSlides,
};
