
exports.seed = function(knex) {
  
  return knex('steps').truncate()
    .then(function () {
      return knex('steps').insert([
        {
          step_number: 1, 
          instruction: 'Proin at nibh ligula. Donec sapien urna, consectetur sit amet odio quis, tristique lacinia orci.',
          recipe_id: 1
        },
        {
          step_number: 2, 
          instruction: 'Maecenas sit amet fringilla tellus. Mauris aliquet efficitur lacus, ut lobortis arcu varius non.',
          recipe_id: 1
        },
        {
          step_number: 3, 
          instruction: 'Donec non libero libero. Proin rhoncus felis sit amet aliquet gravida',
          recipe_id: 1
        },
        {
          step_number: 1, 
          instruction: 'Donec non libero libero. Proin rhoncus felis sit amet aliquet gravida',
          recipe_id: 2
        },
        {
          step_number: 2, 
          instruction: 'Donec non libero libero. Proin rhoncus felis sit amet aliquet gravida',
          recipe_id: 2
        },
        {
          step_number: 1, 
          instruction: 'Aenean quis consectetur enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
          recipe_id: 3
        },
        {
          step_number: 2, 
          instruction: 'Curabitur sagittis faucibus velit, iaculis lobortis metus fringilla sed.',
          recipe_id: 3
        },
      ]);
    });
};
