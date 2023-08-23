const express = require('express');
const route = express.Router();
const User = require('../models/user')
const Todo = require('../models/todo')

route.get('/users', function (req, res, next) {
    User.find({}).populate('todos').then(function (users) {
        res.send(users)
    }).then(function (users) {
        res.send(users);
    })
})

route.get('/users/:id', function (req, res, next) {
    User.findById({ _id: req.params.id }, req.body).then(function (user) {
        User.findOne({ _id: req.params.id }).then(function (user) {
            res.send(user);
        })
    })
})

route.post('/users', function (req, res, next) {
    User.create(req.body).then(function (user) {
        res.send(user);
    }).catch(next);

});

route.put('/users/:id', function (req, res, next) {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (user) {
        User.findOne({ _id: req.params.id }).then(function (user) {
            res.send(user);
        })
    })
});

route.delete('/users/:id', function (req, res, next) {
    User.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
        res.send(user)
    })
});

route.post('/affecter-todo/:userId/:todoId', async (req, res) => {

    const userId = req.params.userId;
    const todoId = req.params.todoId;

    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    const todo = await Todo.findById(todoId);
    if (!todo) {
        return res.status(404).json({ message: "Todo introuvable" });
    }

    user.todos.push(todoId);
    await user.save();

    res.status(200).json({ message: "Todo affecté à l'utilisateur avec succès" });
});

route.delete('/enlever-todo/:userId/:todoId', async (req, res) => {

    const userId = req.params.userId;
    const todoId = req.params.todoId;

    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    const todo = await Todo.findById(todoId);
    if (!todo) {
        return res.status(404).json({ message: "Todo introuvable" });
    }

    user.todos.pull(todoId);
    await user.save();

    res.status(200).json({ message: "Todo enlevée avec succès" });
});


module.exports = route;