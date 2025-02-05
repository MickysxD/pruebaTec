const express = require('express');
const router = express.Router();

const proyectoController = require('../controllers/proyectoController');

router.route('/prueba').get(proyectoController.controllers.prueba);

router.route('/crearProyecto').post(proyectoController.controllers.crearProyecto);
router.route('/obtenerProyectos').post(proyectoController.controllers.obtenerProyectos);
router.route('/actualizarProyecto').post(proyectoController.controllers.actualizarProyecto);
router.route('/eliminarProyecto').post(proyectoController.controllers.eliminarProyecto);




/*
router.route('/obtenerBodegas').post(proyectoController.controllers.obtenerBodegas);
router.route('/crearBodega').post(proyectoController.controllers.crearBodega);
router.route('/editarBodega').post(proyectoController.controllers.editarBodega);
router.route('/eliminarActivarBodega').post(proyectoController.controllers.eliminarActivarBodega);

router.route('/obtenerInsumos').post(proyectoController.controllers.obtenerInsumos);
router.route('/crearInsumo').post(proyectoController.controllers.crearInsumo);
router.route('/editarInsumo').post(proyectoController.controllers.editarInsumo);
router.route('/eliminarInsumo').post(proyectoController.controllers.eliminarInsumo);

router.route('/obtenerUnidades').post(proyectoController.controllers.obtenerUnidades);
router.route('/crearUnidad').post(proyectoController.controllers.crearUnidad);
router.route('/editarUnidad').post(proyectoController.controllers.editarUnidad);
router.route('/eliminarUnidad').post(proyectoController.controllers.eliminarUnidad);

router.route('/crearCarga').post(proyectoController.controllers.crearCarga);

router.route('/obtenerUsuariosproyecto').post(proyectoController.controllers.obtenerUsuariosproyecto);
router.route('/obtenerBodegaUsuario').post(proyectoController.controllers.obtenerBodegaUsuario);
router.route('/obtenerBodegaAdministrador').post(proyectoController.controllers.obtenerBodegaAdministrador);
router.route('/obtenerBodegaInsumo').post(proyectoController.controllers.obtenerBodegaInsumo);
router.route('/obtenerBodegaUnidad').post(proyectoController.controllers.obtenerBodegaUnidad);
router.route('/obtenerBodegaCarga').post(proyectoController.controllers.obtenerBodegaCarga);
router.route('/crearDescarga').post(proyectoController.controllers.crearDescarga);
router.route('/crearDescargaDetalle').post(proyectoController.controllers.crearDescargaDetalle);

router.route('/transaccionCargaUsuario').post(proyectoController.controllers.transaccionCargaUsuario);
router.route('/eliminarCarga').post(proyectoController.controllers.eliminarCarga);
router.route('/transaccionDescargaUsuario').post(proyectoController.controllers.transaccionDescargaUsuario);
router.route('/eliminarDescarga').post(proyectoController.controllers.eliminarDescarga);

router.route('/alertasUsuario').post(proyectoController.controllers.alertasUsuario);
router.route('/alertasAdministrador').post(proyectoController.controllers.alertasAdministrador);
router.route('/bitacoraAdministrador').post(proyectoController.controllers.bitacoraAdministrador);

router.route('/bodegaAdministrador').post(proyectoController.controllers.bodegaAdministrador);
router.route('/insumoAdministrador').post(proyectoController.controllers.insumoAdministrador);
router.route('/unidadesAdministrador').post(proyectoController.controllers.unidadesAdministrador);
router.route('/busquedaInsumos').post(proyectoController.controllers.busquedaInsumos);

router.route('/transaccionDescarga').post(proyectoController.controllers.transaccionDescarga);
router.route('/transaccionCarga').post(proyectoController.controllers.transaccionCarga);
*/


module.exports = router;
