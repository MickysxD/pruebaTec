const citaQuerys = require('../dbquerys/citaQuerys')

const controllers = {}

controllers.prueba = async function prueba(req, res) {
    console.log('LLEGO A PRUEBA INVENTARIO')
    res.status(200).json({ status: 200, message: 'Consulta exitosa', data: { saludo: 'hola' } });
}

controllers.obtenerBodegas = async function obtenerBodegas(req, res) {
    await citaQuerys.querys.obtenerBodegas()
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.crearBodega = async function crearBodega(req, res) {
    await citaQuerys.querys.crearBodega(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.editarBodega = async function editarBodega(req, res) {
    await citaQuerys.querys.editarBodega(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.eliminarActivarBodega = async function eliminarActivarBodega(req, res) {
    await citaQuerys.querys.eliminarActivarBodega(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}




controllers.obtenerInsumos = async function obtenerInsumos(req, res) {
    await citaQuerys.querys.obtenerInsumos()
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.crearInsumo = async function crearInsumo(req, res) {
    await citaQuerys.querys.crearInsumo(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.editarInsumo = async function editarInsumo(req, res) {
    await citaQuerys.querys.editarInsumo(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.eliminarInsumo = async function eliminarInsumo(req, res) {
    await citaQuerys.querys.eliminarInsumo(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}




controllers.obtenerUnidades = async function obtenerUnidades(req, res) {
    await citaQuerys.querys.obtenerUnidades()
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.crearUnidad = async function crearUnidad(req, res) {
    await citaQuerys.querys.crearUnidad(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.editarUnidad = async function editarUnidad(req, res) {
    await citaQuerys.querys.editarUnidad(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.eliminarUnidad = async function eliminarUnidad(req, res) {
    await citaQuerys.querys.eliminarUnidad(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.crearCarga = async function crearCarga(req, res) {
    await citaQuerys.querys.crearCarga(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerUsuariosInventario = async function obtenerUsuariosInventario(req, res) {
    await citaQuerys.querys.obtenerUsuariosInventario(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerBodegaUsuario = async function obtenerBodegaUsuario(req, res) {
    await citaQuerys.querys.obtenerBodegaUsuario(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerBodegaAdministrador = async function obtenerBodegaAdministrador(req, res) {
    await citaQuerys.querys.obtenerBodegaAdministrador(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerBodegaInsumo = async function obtenerBodegaInsumo(req, res) {
    await citaQuerys.querys.obtenerBodegaInsumo(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerBodegaUnidad = async function obtenerBodegaUnidad(req, res) {
    await citaQuerys.querys.obtenerBodegaUnidad(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerBodegaCarga = async function obtenerBodegaCarga(req, res) {
    await citaQuerys.querys.obtenerBodegaCarga(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.crearDescarga = async function crearDescarga(req, res) {
    await citaQuerys.querys.crearDescarga(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.crearDescargaDetalle = async function crearDescargaDetalle(req, res) {
    await citaQuerys.querys.crearDescargaDetalle(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}



controllers.transaccionCargaUsuario = async function transaccionCargaUsuario(req, res) {
    await citaQuerys.querys.transaccionCargaUsuario(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.eliminarCarga = async function eliminarCarga(req, res) {
    await citaQuerys.querys.eliminarCarga(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.transaccionDescargaUsuario = async function transaccionDescargaUsuario(req, res) {
    await citaQuerys.querys.transaccionDescargaUsuario(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.eliminarDescarga = async function eliminarDescarga(req, res) {
    await citaQuerys.querys.eliminarDescarga(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}





controllers.alertasUsuario = async function alertasUsuario(req, res) {
    await citaQuerys.querys.alertasUsuario(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.alertasAdministrador = async function alertasAdministrador(req, res) {
    await citaQuerys.querys.alertasAdministrador(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}



controllers.bitacoraAdministrador = async function bitacoraAdministrador(req, res) {
    await citaQuerys.querys.bitacoraAdministrador(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.bodegaAdministrador = async function bodegaAdministrador(req, res) {
    await citaQuerys.querys.bodegaAdministrador(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.insumoAdministrador = async function insumoAdministrador(req, res) {
    await citaQuerys.querys.insumoAdministrador(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.unidadesAdministrador = async function unidadesAdministrador(req, res) {
    await citaQuerys.querys.unidadesAdministrador(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.busquedaInsumos = async function busquedaInsumos(req, res) {
    await citaQuerys.querys.busquedaInsumos(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.transaccionDescarga = async function transaccionDescarga(req, res) {
    await citaQuerys.querys.transaccionDescarga(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.transaccionCarga = async function transaccionCarga(req, res) {
    await citaQuerys.querys.transaccionCarga(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}












module.exports.controllers = controllers;
