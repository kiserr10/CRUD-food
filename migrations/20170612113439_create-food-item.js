
exports.up = function(knex, Promise) {
  return knex.schema.createTable('food', (table) => {
		table.increments();
		table.text('title').notNullable();
		table.text('description');
		table.float('rating');
		table.float('quantity').notNullable();
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('food')
};
