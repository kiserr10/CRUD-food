const knex = require('./knex'); //The connection

module.exports = {
	getAll(){
		return knex('food');
	}

};
