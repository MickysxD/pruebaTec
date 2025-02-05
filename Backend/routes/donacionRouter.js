const express = require('express');
const router = express.Router();

const donacionController = require('../controllers/donacionController');

router.route('/crearDonacion').post(donacionController.controllers.crearDonacion);
router.route('/obtenerDonaciones').post(donacionController.controllers.obtenerDonaciones);
router.route('/actualizarDonacion').post(donacionController.controllers.actualizarDonacion);
router.route('/eliminarDonacion').post(donacionController.controllers.eliminarDonacion);

module.exports = router;
