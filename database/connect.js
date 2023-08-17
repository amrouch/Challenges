const mongoose = require('mongoose');

const dbURL = 'mongodb://127.0.0.1/challenges';

mongoose.connect(dbURL)
    .then(() => {
        console.log('Connexion à la base de données établie avec succès.');
    })
    .catch((error) => {
        console.error('Erreur lors de la connexion à la base de données :', error);
    });

module.exports = mongoose;