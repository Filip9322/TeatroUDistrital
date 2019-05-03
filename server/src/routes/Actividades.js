const express = require('express');
const router = express.Router();
const Actividad = require('../../db/model/Actividades');

router.get('/me', (_, res, next) => {
    Actividad.findAll({
  attributes: ['*'], raw:true }).then(actividad => {
        res.json(actividad);
    }).catch(err => next(err));
});


module.exports = router;