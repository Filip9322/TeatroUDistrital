const connection = require('../Connection');
const Sequelize = require('sequelize');

const Responsables = connection.Sequelize.define('actividad', {
    id: {
        type: Sequelize.INTEGER, primaryKey: true
    },
    nombres: {
        type: Sequelize.STRING
    },
    apellidos: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    cargo: {
        type: Sequelize.STRING
    },
    telefono: {
        type: Sequelize.STRING
    }
}, {
    timestamps: true,
    fecha_creacion: 'fecha_creacion',
    tableName: 'teatro_responsables'
});

module.exports = Responsables;