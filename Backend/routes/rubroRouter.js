const express = require('express');
const router = express.Router();

const rubroController = require('../controllers/rubroController');

router.route('/crearRubro').post(rubroController.controllers.crearRubro);
router.route('/obtenerRubros').post(rubroController.controllers.obtenerRubros);
router.route('/actualizarRubro').post(rubroController.controllers.actualizarRubro);
router.route('/eliminarRubro').post(rubroController.controllers.eliminarRubro);
router.route('/obtenerRubrosProyecto').post(rubroController.controllers.obtenerRubrosProyecto);

module.exports = router;
