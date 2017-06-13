const knex = require('./knex'); //The connection

module.exports = {
	getAll(){
		return knex('food');
	},
	getOne(id){
		return knex('food').where('id', id).first();
	},
	create(food){
		return knex('food').insert(food, '*');
	},
	update(id, food){
		return knex('food').where('id', id).update(food, '*');
	}
};
