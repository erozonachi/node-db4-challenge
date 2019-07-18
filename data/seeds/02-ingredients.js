
exports.seed = function(knex) {
  
  return knex('ingredients').truncate()
    .then(function () {
      return knex('ingredients').insert([
        {
          ing_name: 'Okra', 
          ing_unit: 'gram',
          ing_unit_price: 50
        },
        {
          ing_name: 'Red Oil', 
          ing_unit: 'centilitre',
          ing_unit_price: 100
        },
        {
          ing_name: 'Maggi', 
          ing_unit: 'cube',
          ing_unit_price: 50
        },
        {
          ing_name: 'Pepper', 
          ing_unit: 'gram',
          ing_unit_price: 50
        },
        {
          ing_name: 'Onions', 
          ing_unit: 'gram',
          ing_unit_price: 30
        },
        {
          ing_name: 'Salt', 
          ing_unit: 'gram',
          ing_unit_price: 10
        },
        {
          ing_name: 'Dry Fish', 
          ing_unit: 'kilogram',
          ing_unit_price: 500
        },
        {
          ing_name: 'Stock Fish', 
          ing_unit: 'kilogram',
          ing_unit_price: 1000
        },
        {
          ing_name: 'Meat', 
          ing_unit: 'kilogram',
          ing_unit_price: 1500
        },
        {
          ing_name: 'Pumpkin Vegetable', 
          ing_unit: 'gram',
          ing_unit_price: 20
        },
        {
          ing_name: 'Water Leaf', 
          ing_unit: 'gram',
          ing_unit_price: 10
        },
        {
          ing_name: 'Thickener', 
          ing_unit: 'gram',
          ing_unit_price: 10
        },
        {
          ing_name: 'Utazi Leaf', 
          ing_unit: 'gram',
          ing_unit_price: 5
        },
        {
          ing_name: 'Periwinkle', 
          ing_unit: 'kilogram',
          ing_unit_price: 500
        },
        {
          ing_name: 'Tomatoes', 
          ing_unit: 'gram',
          ing_unit_price: 10
        },
      ]);
    });
};
