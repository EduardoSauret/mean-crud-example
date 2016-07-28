var mongoose = require('mongoose');
var Todo = require('server/db/db').Todo;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	Todo.find(function(err, results) {
		if (err) { console.log(err); } 
		res.send({ todos: results });
	});
});

router.post('/', function(req,res){
	var todo = new Todo(req.body);
	todo.save(function(err) {
		if (err) { console.log(err);}

		res.send('ToDo Saved');
	});
});

module.exports = router;