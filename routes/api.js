const express = require('express');
const router = express.Router();
const Todo = require('../models/todo')

router.get('/todos', function (req, res, next) {
    Todo.find({}).then(function (todos) {
        res.send(todos)
    }).then(function (todos) {
        res.send(todos);
    })
})

router.get('/todos/:id', function (req, res, next) {
    Todo.findById({ _id: req.params.id }, req.body).then(function (todo) {
        Todo.findOne({ _id: req.params.id }).then(function (todo) {
            res.send(todo);
        })
    })
})

router.post('/todos', function (req, res, next) {
    Todo.create(req.body).then(function (todo) {
        res.send(todo);
    }).catch(next);

});

router.put('/todos/:id', function (req, res, next) {
    Todo.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (todo) {
        Todo.findOne({ _id: req.params.id }).then(function (todo) {
            res.send(todo);
        })
    })
});

router.delete('/todos/:id', function (req, res, next) {
    Todo.findByIdAndRemove({ _id: req.params.id }).then(function (todo) {
        res.send(todo)
    })
});

module.exports = router;