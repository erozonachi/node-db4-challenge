
exports.seed = function(knex) {
  
  return knex('recipe-items').truncate()
    .then(function () {
      return knex('recipe-items').insert([
        {
          recipe_id: 1, 
          ing_id: 1
        },
        {
          recipe_id: 1, 
          ing_id: 2
        },
        {
          recipe_id: 1, 
          ing_id: 3
        },
        {
          recipe_id: 1, 
          ing_id: 4
        },
        {
          recipe_id: 1, 
          ing_id: 6
        },
        {
          recipe_id: 1, 
          ing_id: 7
        },
        {
          recipe_id: 2, 
          ing_id: 13
        },
        {
          recipe_id: 2, 
          ing_id: 2
        },
        {
          recipe_id: 2, 
          ing_id: 3
        },
        {
          recipe_id: 2, 
          ing_id: 4
        },
        {
          recipe_id: 2, 
          ing_id: 6
        },
        {
          recipe_id: 2, 
          ing_id: 7
        },
        {
          recipe_id: 3, 
          ing_id: 12
        },
        {
          recipe_id: 1, 
          ing_id: 2
        },
        {
          recipe_id: 3, 
          ing_id: 3
        },
        {
          recipe_id: 3, 
          ing_id: 4
        },
        {
          recipe_id: 3, 
          ing_id: 6
        },
        {
          recipe_id: 3, 
          ing_id: 7
        },
      ]);
    });
};
