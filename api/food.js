const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

function isValidId(req, res, next){
	if(!isNaN(req.params.id)) return next();
	next(new Error('Invalid ID'));
}

function validFoodItem(food){
	const hasTitle = typeof food.title == 'string' && food.title.trim() != '';
	return hasTitle;
}

router.get('/', (req, res) => {
	queries.getAll().then(food => {
		res.json(food);
	});
});

router.get('/:id', isValidId,(req, res, next) => {
	queries.getOne(req.params.id).then(food => {
		if(food){
			res.json(food);
		} else {
			next();
		}
	});
});

router.post('/', (req, res, next) =>{
	if(validFoodItem(req.body)){
		queries.create(req.body).then(food =>{
			res.json(food[0]);
		});
	} else {
		next(new Error('Invalid Food Item'));
	}
});

router.put('/:id', isValidId, (req, res, next) =>{
	if(validFoodItem(req.body)){
		queries.update(req.params.id, req.body).then(food =>{
			res.json(food[0]);
		});
	} else {
		next(new Error('Invalid Food Item'));
	}

});

module.exports = router;
