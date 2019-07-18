const db = require('../data/dbConfig');

module.exports = {
  getRecipes: function() {
    return db('recipes');
  },

  getShoppingList: function(recipe_id) {
    return db('recipe-items')
      .select('ing_name', 'quantity')
      .join('ingredients', 'ing_id', 'ingredients.id')
      .where({ recipe_id });
  },
};
