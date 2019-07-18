const db = require('../data/dbConfig');

module.exports = {
  getRecipes: function() {
    return db('recipes');
  },
};
