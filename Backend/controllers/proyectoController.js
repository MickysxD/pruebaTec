const proyectoQuerys = require('../dbquerys/proyectoQuerys')

const controllers = {}

controllers.prueba = async function prueba(req, res) {
    console.log('LLEGO A PRUEBA INVENTARIO')
    res.status(200).json({ status: 200, message: 'Consulta exitosa', data: { saludo: 'hola' } });
}




controllers.crearProyecto = async function crearProyecto(req, res) {
    await proyectoQuerys.querys.crearProyecto(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerProyectos = async function obtenerProyectos(req, res) {
    await proyectoQuerys.querys.obtenerProyectos(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.actualizarProyecto = async function actualizarProyecto(req, res) {
    await proyectoQuerys.querys.actualizarProyecto(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.eliminarProyecto = async function eliminarProyecto(req, res) {
    await proyectoQuerys.querys.eliminarProyecto(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}


/*
controllers.obtenerBodegas = async function obtenerBodegas(req, res) {
    await proyectoQuerys.querys.obtenerBodegas()
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.crearBodega = async function crearBodega(req, res) {
    await proyectoQuerys.querys.crearBodega(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.editarBodega = async function editarBodega(req, res) {
    await proyectoQuerys.querys.editarBodega(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.eliminarActivarBodega = async function eliminarActivarBodega(req, res) {
    await proyectoQuerys.querys.eliminarActivarBodega(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}




controllers.obtenerInsumos = async function obtenerInsumos(req, res) {
    await proyectoQuerys.querys.obtenerInsumos()
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.crearInsumo = async function crearInsumo(req, res) {
    await proyectoQuerys.querys.crearInsumo(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.editarInsumo = async function editarInsumo(req, res) {
    await proyectoQuerys.querys.editarInsumo(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.eliminarInsumo = async function eliminarInsumo(req, res) {
    await proyectoQuerys.querys.eliminarInsumo(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}




controllers.obtenerUnidades = async function obtenerUnidades(req, res) {
    await proyectoQuerys.querys.obtenerUnidades()
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.crearUnidad = async function crearUnidad(req, res) {
    await proyectoQuerys.querys.crearUnidad(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.editarUnidad = async function editarUnidad(req, res) {
    await proyectoQuerys.querys.editarUnidad(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.eliminarUnidad = async function eliminarUnidad(req, res) {
    await proyectoQuerys.querys.eliminarUnidad(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.crearCarga = async function crearCarga(req, res) {
    await proyectoQuerys.querys.crearCarga(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerUsuariosInventario = async function obtenerUsuariosInventario(req, res) {
    await proyectoQuerys.querys.obtenerUsuariosInventario(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerBodegaUsuario = async function obtenerBodegaUsuario(req, res) {
    await proyectoQuerys.querys.obtenerBodegaUsuario(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerBodegaAdministrador = async function obtenerBodegaAdministrador(req, res) {
    await proyectoQuerys.querys.obtenerBodegaAdministrador(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerBodegaInsumo = async function obtenerBodegaInsumo(req, res) {
    await proyectoQuerys.querys.obtenerBodegaInsumo(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerBodegaUnidad = async function obtenerBodegaUnidad(req, res) {
    await proyectoQuerys.querys.obtenerBodegaUnidad(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerBodegaCarga = async function obtenerBodegaCarga(req, res) {
    await proyectoQuerys.querys.obtenerBodegaCarga(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.crearDescarga = async function crearDescarga(req, res) {
    await proyectoQuerys.querys.crearDescarga(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.crearDescargaDetalle = async function crearDescargaDetalle(req, res) {
    await proyectoQuerys.querys.crearDescargaDetalle(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}



controllers.transaccionCargaUsuario = async function transaccionCargaUsuario(req, res) {
    await proyectoQuerys.querys.transaccionCargaUsuario(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.eliminarCarga = async function eliminarCarga(req, res) {
    await proyectoQuerys.querys.eliminarCarga(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.transaccionDescargaUsuario = async function transaccionDescargaUsuario(req, res) {
    await proyectoQuerys.querys.transaccionDescargaUsuario(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.eliminarDescarga = async function eliminarDescarga(req, res) {
    await proyectoQuerys.querys.eliminarDescarga(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}





controllers.alertasUsuario = async function alertasUsuario(req, res) {
    await proyectoQuerys.querys.alertasUsuario(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.alertasAdministrador = async function alertasAdministrador(req, res) {
    await proyectoQuerys.querys.alertasAdministrador(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}



controllers.bitacoraAdministrador = async function bitacoraAdministrador(req, res) {
    await proyectoQuerys.querys.bitacoraAdministrador(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.bodegaAdministrador = async function bodegaAdministrador(req, res) {
    await proyectoQuerys.querys.bodegaAdministrador(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.insumoAdministrador = async function insumoAdministrador(req, res) {
    await proyectoQuerys.querys.insumoAdministrador(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.unidadesAdministrador = async function unidadesAdministrador(req, res) {
    await proyectoQuerys.querys.unidadesAdministrador(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.busquedaInsumos = async function busquedaInsumos(req, res) {
    await proyectoQuerys.querys.busquedaInsumos(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.transaccionDescarga = async function transaccionDescarga(req, res) {
    await proyectoQuerys.querys.transaccionDescarga(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.transaccionCarga = async function transaccionCarga(req, res) {
    await proyectoQuerys.querys.transaccionCarga(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}
*/


module.exports.controllers = controllers;
