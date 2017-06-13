const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

function isValidId(req, res, next){
	if(!isNaN(req.params.id)) return next ();
	next(new Error('Invalid ID'));
}

router.get('/', (req, res) => {
	queries.getAll().then(food => {
		res.json(food);
	});
});

router.get('/:id', isValidId, (req, res) => {
	res.json({
		message: 'Whats Good!!!',
	});
});

module.exports = router;
