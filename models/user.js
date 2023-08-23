const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    firstName: {
        type: String
    },

    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
    todos: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'todo'
    }]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;