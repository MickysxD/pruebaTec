const express = require('express');
const router = express.Router();

const inventarioController = require('../controllers/inventarioController');

router.route('/prueba').get(inventarioController.controllers.prueba);

router.route('/obtenerBodegas').post(inventarioController.controllers.obtenerBodegas);
router.route('/crearBodega').post(inventarioController.controllers.crearBodega);
router.route('/editarBodega').post(inventarioController.controllers.editarBodega);
router.route('/eliminarActivarBodega').post(inventarioController.controllers.eliminarActivarBodega);

router.route('/obtenerInsumos').post(inventarioController.controllers.obtenerInsumos);
router.route('/crearInsumo').post(inventarioController.controllers.crearInsumo);
router.route('/editarInsumo').post(inventarioController.controllers.editarInsumo);
router.route('/eliminarInsumo').post(inventarioController.controllers.eliminarInsumo);

router.route('/obtenerUnidades').post(inventarioController.controllers.obtenerUnidades);
router.route('/crearUnidad').post(inventarioController.controllers.crearUnidad);
router.route('/editarUnidad').post(inventarioController.controllers.editarUnidad);
router.route('/eliminarUnidad').post(inventarioController.controllers.eliminarUnidad);

router.route('/crearCarga').post(inventarioController.controllers.crearCarga);

router.route('/obtenerUsuariosInventario').post(inventarioController.controllers.obtenerUsuariosInventario);
router.route('/obtenerBodegaUsuario').post(inventarioController.controllers.obtenerBodegaUsuario);
router.route('/obtenerBodegaAdministrador').post(inventarioController.controllers.obtenerBodegaAdministrador);
router.route('/obtenerBodegaInsumo').post(inventarioController.controllers.obtenerBodegaInsumo);
router.route('/obtenerBodegaUnidad').post(inventarioController.controllers.obtenerBodegaUnidad);
router.route('/obtenerBodegaCarga').post(inventarioController.controllers.obtenerBodegaCarga);
router.route('/crearDescarga').post(inventarioController.controllers.crearDescarga);
router.route('/crearDescargaDetalle').post(inventarioController.controllers.crearDescargaDetalle);

router.route('/transaccionCargaUsuario').post(inventarioController.controllers.transaccionCargaUsuario);
router.route('/eliminarCarga').post(inventarioController.controllers.eliminarCarga);
router.route('/transaccionDescargaUsuario').post(inventarioController.controllers.transaccionDescargaUsuario);
router.route('/eliminarDescarga').post(inventarioController.controllers.eliminarDescarga);

router.route('/alertasUsuario').post(inventarioController.controllers.alertasUsuario);
router.route('/alertasAdministrador').post(inventarioController.controllers.alertasAdministrador);
router.route('/bitacoraAdministrador').post(inventarioController.controllers.bitacoraAdministrador);

router.route('/bodegaAdministrador').post(inventarioController.controllers.bodegaAdministrador);
router.route('/insumoAdministrador').post(inventarioController.controllers.insumoAdministrador);
router.route('/unidadesAdministrador').post(inventarioController.controllers.unidadesAdministrador);
router.route('/busquedaInsumos').post(inventarioController.controllers.busquedaInsumos);

router.route('/transaccionDescarga').post(inventarioController.controllers.transaccionDescarga);
router.route('/transaccionCarga').post(inventarioController.controllers.transaccionCarga);








module.exports = router;