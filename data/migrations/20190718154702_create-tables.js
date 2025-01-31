
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.text('recipe_title', 128)
        .unique()
        .notNullable();
      tbl.text('recipe_desc');
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.text('ing_name', 128)
        .unique()
        .notNullable();
      tbl.text('ing_unit', 64)
        .notNullable();
      tbl.decimal('ing_unit_price')
        .notNullable();
    })
    .createTable('steps', tbl => {
      tbl.increments();
      tbl.integer('step_number')
        .unsigned()
        .notNullable();
      tbl.text('instruction')
        .notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('recipe-items', tbl => {
      tbl.increments();
      tbl.integer('quantity')
        .unsigned()
        .notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('ing_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.unique(['recipe_id', 'ing_id']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipe-items');
};
