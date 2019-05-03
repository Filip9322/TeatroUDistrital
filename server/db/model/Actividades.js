const connection = require('../Connection');
const Sequelize = require('sequelize');

const Actividades = connection.Sequelize.define('actividad', {
    id: {
        type: Sequelize.INTEGER, primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    responsable: {
        type: Sequelize.INTEGER
    },
    sala: {
        type: Sequelize.INTEGER
    },
    estado: {
        type: Sequelize.STRING
    },
    fecha_limite: {
        type: Sequelize.DATE
    }
}, {
    timestamps: true,
    fecha_creacion: 'fecha_creacion',
    tableName: 'teatro_actividades'
});

module.exports = Actividades;