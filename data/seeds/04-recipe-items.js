
exports.seed = function(knex) {
  
  return knex('recipe-items').truncate()
    .then(function () {
      return knex('recipe-items').insert([
        {
          quantity: 3,
          recipe_id: 1, 
          ing_id: 1
        },
        {
          quantity: 2,
          recipe_id: 1, 
          ing_id: 2
        },
        {
          quantity: 4,
          recipe_id: 1, 
          ing_id: 3
        },
        {
          quantity: 2,
          recipe_id: 1, 
          ing_id: 4
        },
        {
          quantity: 1,
          recipe_id: 1, 
          ing_id: 6
        },
        {
          quantity: 3,
          recipe_id: 1, 
          ing_id: 7
        },
        {
          quantity: 4,
          recipe_id: 2, 
          ing_id: 13
        },
        {
          quantity: 2,
          recipe_id: 2, 
          ing_id: 2
        },
        {
          quantity: 1,
          recipe_id: 2, 
          ing_id: 3
        },
        {
          quantity: 4,
          recipe_id: 2, 
          ing_id: 4
        },
        {
          quantity: 1,
          recipe_id: 2, 
          ing_id: 6
        },
        {
          quantity: 2,
          recipe_id: 2, 
          ing_id: 7
        },
        {
          quantity: 3,
          recipe_id: 3, 
          ing_id: 12
        },
        {
          quantity: 4,
          recipe_id: 3, 
          ing_id: 2
        },
        {
          quantity: 1,
          recipe_id: 3, 
          ing_id: 3
        },
        {
          quantity: 2,
          recipe_id: 3, 
          ing_id: 4
        },
        {
          quantity: 4,
          recipe_id: 3, 
          ing_id: 6
        },
        {
          quantity: 1,
          recipe_id: 3, 
          ing_id: 7
        },
      ]);
    });
};
