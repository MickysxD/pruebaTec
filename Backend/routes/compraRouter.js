const express = require('express');
const router = express.Router();

const compraController = require('../controllers/compraController');

router.route('/crearCompra').post(compraController.controllers.crearCompra);
router.route('/obtenerCompras').post(compraController.controllers.obtenerCompras);
router.route('/actualizarCompra').post(compraController.controllers.actualizarCompra);
router.route('/eliminarCompra').post(compraController.controllers.eliminarCompra);

module.exports = router;
