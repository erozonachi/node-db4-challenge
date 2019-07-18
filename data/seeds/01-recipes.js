
exports.seed = function(knex) {
  
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
        {
          recipe_title: 'How to prepare delicious Okra soup', 
          recipe_desc: 'Etiam rhoncus est a purus fringilla pharetra. Aliquam rhoncus est non nibh tristique semper. Curabitur ac scelerisque magna. Ut aliquet tortor lectus. Mauris accumsan, nulla quis finibus pulvinar, lorem nulla dapibus purus, eu sagittis urna sem mattis lacus. Duis pretium quis ante eu placerat. Proin at nibh ligula. Donec sapien urna, consectetur sit amet odio quis, tristique lacinia orci.'
        },
        {
          recipe_title: 'How to prepare delicious Bitter-leaf soup', 
          recipe_desc: 'Maecenas sit amet fringilla tellus. Mauris aliquet efficitur lacus, ut lobortis arcu varius non. Quisque porttitor sagittis tortor ut semper. Morbi ac sem tempus, mollis metus nec, tempor eros. Maecenas id est lectus. Integer non volutpat nisi. Donec tincidunt libero justo, luctus sodales libero aliquam quis. Donec non libero libero. Proin rhoncus felis sit amet aliquet gravida'
        },
        {
          recipe_title: 'How to prepare Sumptious White soup', 
          recipe_desc: 'Aenean quis consectetur enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur sagittis faucibus velit, iaculis lobortis metus fringilla sed.'
        },
      ]);
    });
};
