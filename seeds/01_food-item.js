
const foodItems = require('../food')
exports.seed = function(knex, Promise) {
  return knex('food').del()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert(foodItems);
    });
};
