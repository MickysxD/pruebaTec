const db = require('../database/database');

const querys = {};

querys.obtenerBodegas = async function obtenerBodegas() {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL obtenerBodegas();`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.crearBodega = async function crearBodega(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL crearBodega('${data.idusuario}','${data.nombre}','${data.descripcion}');`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.editarBodega = async function editarBodega(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL editarBodega('${data.idusuario}','${data.idbodega}','${data.nombre}','${data.descripcion}');`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.eliminarActivarBodega = async function eliminarActivarBodega(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL eliminarActivarBodega('${data.idusuario}','${data.idbodega}','${data.estado}');`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}



querys.obtenerInsumos = async function obtenerInsumos() {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL obtenerInsumos();`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.crearInsumo = async function crearInsumo(data) {
    return new Promise(async (resolve, reject) => {
        let descripcion = data.descripcion ? `'${data.descripcion}'` : data.descripcion;
        let codigo = data.codigo ? `'${data.codigo}'` : data.codigo;
        await db.ejecutarQuery(`CALL crearInsumo('${data.idusuario}','${data.nombre}',${descripcion},${codigo});`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.editarInsumo = async function editarInsumo(data) {
    return new Promise(async (resolve, reject) => {
        let descripcion = data.descripcion || data.descripcion === '' ? `'${data.descripcion}'` : data.descripcion;
        let codigo = data.codigo || data.codigo === '' ? `'${data.codigo}'` : data.codigo;
        await db.ejecutarQuery(`CALL editarInsumo('${data.idusuario}','${data.idinsumo}','${data.nombre}',${descripcion},${codigo});`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.eliminarInsumo = async function eliminarInsumo(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL eliminarInsumo('${data.idusuario}','${data.idinsumo}');`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}




querys.obtenerUnidades = async function obtenerUnidades() {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL obtenerUnidades();`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.crearUnidad = async function crearUnidad(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL crearUnidad('${data.idusuario}','${data.nombre}');`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.editarUnidad = async function editarUnidad(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL editarUnidad('${data.idusuario}','${data.idunidad}','${data.nombre}');`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.eliminarUnidad = async function eliminarUnidad(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL eliminarUnidad('${data.idusuario}','${data.idunidad}');`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}



querys.crearCarga = async function crearCarga(data) {
    return new Promise(async (resolve, reject) => {
        let observacion = data.observacion ? `'${data.observacion}'` : data.observacion;
        let comprobante = data.comprobante ? `'${data.comprobante}'` : data.comprobante;
        let precio = data.precio ? `'${data.precio}'` : data.precio;
        let proveedor = data.proveedor ? `'${data.proveedor}'` : data.proveedor;
        let kardex = data.kardex ? `'${data.kardex}'` : data.kardex;
        let seccion = data.seccion ? `'${data.seccion}'` : data.seccion;
        await db.ejecutarQuery(`CALL crearCarga('${data.idusuario}','${data.idBodegaInventario}','${data.idPresentacionInventario}','${data.idInsumoInventario}','${data.cantidad}','${data.cantidad}','${data.vencimiento}',${observacion},${comprobante},${precio},${proveedor},${kardex},${seccion});`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}



querys.obtenerUsuariosInventario = async function obtenerUsuariosInventario(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL obtenerUsuariosInventario();`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}


querys.obtenerBodegaUsuario = async function obtenerBodegaUsuario(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL obtenerBodegaUsuario('${data.idusuario}');`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.obtenerBodegaAdministrador = async function obtenerBodegaAdministrador(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL obtenerBodegaAdministrador();`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}


querys.obtenerBodegaInsumo = async function obtenerBodegaInsumo(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL obtenerBodegaInsumo('${data.idbodega}');`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.obtenerBodegaUnidad = async function obtenerBodegaUnidad(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL obtenerBodegaUnidad('${data.idbodega}','${data.idinsumo}');`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.obtenerBodegaCarga = async function obtenerBodegaCarga(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL obtenerBodegaCarga('${data.idbodega}','${data.idinsumo}','${data.idunidad}');`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.crearDescarga = async function crearDescarga(data) {
    return new Promise(async (resolve, reject) => {
        let requisicion = data.requisicion ? `'${data.requisicion}'` : data.requisicion;
        let seccion = data.seccion ? `'${data.seccion}'` : data.seccion;
        let uso = data.uso ? `'${data.uso}'` : data.uso;
        let cargo = data.cargo ? `'${data.cargo}'` : data.cargo;
        await db.ejecutarQuery(`CALL crearDescarga(${data.idusuario},'${data.idreceptor}',${requisicion},${seccion},${uso},${cargo});`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.crearDescargaDetalle = async function crearDescargaDetalle(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL crearDescargaDetalle(${data.idusuario},'${data.idCargaInventario}','${data.idDescargaInventario}','${data.descarga}','${data.estado}');`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}



querys.transaccionCargaUsuario = async function transaccionCargaUsuario(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL transaccionCargaUsuario(${data.idusuario});`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.eliminarCarga = async function eliminarCarga(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL eliminarCarga(${data.idusuario},${data.idcarga});`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.transaccionDescargaUsuario = async function transaccionDescargaUsuario(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL transaccionDescargaUsuario(${data.idusuario});`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.eliminarDescarga = async function eliminarDescarga(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL eliminarDescarga(${data.idusuario},${data.iddescarga});`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}




querys.alertasUsuario = async function alertasUsuario(data) {
    return new Promise(async (resolve, reject) => {
        let cantidad = data.cantidad ? `'${data.cantidad}'` : data.cantidad;
        let inicial = data.inicial ? `'${data.inicial}'` : data.inicial;
        let final = data.final ? `'${data.final}'` : data.final;
        await db.ejecutarQuery(`CALL alertasUsuario(${data.idusuario},${inicial},${final},${cantidad});`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.alertasAdministrador = async function alertasAdministrador(data) {
    return new Promise(async (resolve, reject) => {
        let cantidad = data.cantidad ? `'${data.cantidad}'` : data.cantidad;
        let inicial = data.inicial ? `'${data.inicial}'` : data.inicial;
        let final = data.final ? `'${data.final}'` : data.final;
        await db.ejecutarQuery(`CALL alertasAdministrador(${inicial},${final},${cantidad});`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.bitacoraAdministrador = async function bitacoraAdministrador(data) {
    return new Promise(async (resolve, reject) => {
        let inicial = data.inicial ? `'${data.inicial}'` : data.inicial;
        let final = data.final ? `'${data.final}'` : data.final;
        await db.ejecutarQuery(`CALL bitacoraAdministrador(${inicial},${final});`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.bodegaAdministrador = async function bodegaAdministrador(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL bodegaAdministrador();`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.insumoAdministrador = async function insumoAdministrador(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL insumoAdministrador();`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.unidadesAdministrador = async function unidadesAdministrador(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL unidadesAdministrador();`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.busquedaInsumos = async function busquedaInsumos(data) {
    return new Promise(async (resolve, reject) => {
        let bodega = data.bodega ? `'${data.bodega}'` : data.bodega;
        let insumo = data.insumo ? `'${data.insumo}'` : data.insumo;
        let unidad = data.unidad ? `'${data.unidad}'` : data.unidad;
        await db.ejecutarQuery(`CALL busquedaInsumos(${bodega},${insumo},${unidad});`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.transaccionDescarga = async function transaccionDescarga(data) {
    return new Promise(async (resolve, reject) => {
        let bodega = data.bodega ? `'${data.bodega}'` : data.bodega;
        let inicial = data.inicial ? `'${data.inicial}'` : data.inicial;
        let final = data.final ? `'${data.final}'` : data.final;
        await db.ejecutarQuery(`CALL transaccionDescarga(${bodega},${inicial},${final});`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

querys.transaccionCarga = async function transaccionCarga(data) {
    return new Promise(async (resolve, reject) => {
        let bodega = data.bodega ? `'${data.bodega}'` : data.bodega;
        let inicial = data.inicial ? `'${data.inicial}'` : data.inicial;
        let final = data.final ? `'${data.final}'` : data.final;
        await db.ejecutarQuery(`CALL transaccionCarga(${bodega},${inicial},${final});`)
            .then(res => {
                let response = {
                    message: 'Consulta exitosa',
                    show: false,
                    status: 200,
                    data: res[0]
                }
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}















module.exports.querys = querys;
