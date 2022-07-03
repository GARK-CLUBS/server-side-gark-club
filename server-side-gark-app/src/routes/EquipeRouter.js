const express = require('express');

const router = express.Router();
const Equipecontroller = require('../controllers/EquipeController')

// TODO add auth middleware to all the routes
router.post('/', Equipecontroller.createEquipe);

router.put('/:id', Equipecontroller.modifyEquipe);

router.get('/:id', Equipecontroller.getOneEquipe);

router.get('/byName/:name', Equipecontroller.getEquipeByName);

router.get('/byName/:name', Equipecontroller.findEquipe);

router.delete('/:id', Equipecontroller.deleteOneEquipe);

router.delete('/all', Equipecontroller.deleteAllEquipe); //fiha mochekla f mongo yetfas5ouch lkol ta nchoufha



module.exports = router;