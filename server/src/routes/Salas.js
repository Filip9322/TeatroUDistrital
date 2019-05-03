const express = require('express');
const router = express.Router();
const Sala = require('../../db/model/Salas');

router.get('/me', (_, res, next) => {
    Sala.findAll({
  attributes: ['*'], raw:true }).then(sala => {
        res.json(sala);
    }).catch(err => next(err));
});


module.exports = router;