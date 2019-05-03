const express = require('express');
const router = express.Router();
const Responsables = require('../../db/model/Responsables');

router.get('/me', (_, res, next) => {
    Responsables.findAll({
  attributes: ['*'], raw:true }).then(responsable => {
        res.json(responsable);
    }).catch(err => next(err));
});


module.exports = router;