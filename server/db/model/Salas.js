const connection = require('../Connection');
const Sequelize = require('sequelize');

const Salas = connection.Sequelize.define('sala', {
    id: {
        type: Sequelize.INTEGER, primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    capacidad: {
        type: Sequelize.INTEGER
    },
    horario: {
        type: Sequelize.STRING
    }
}, {
    timestamps: true,
    tableName: 'teatro_salas'
});

module.exports = Salas;