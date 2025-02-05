const db = require('../database/database');

const querys = {};

querys.crearCompra = async function crearCompra(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL crearCompra('${data.proveedor}',${data.monto},${data.compras});`)
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

querys.obtenerCompras = async function obtenerCompras() {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL obtenerCompras();`)
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

querys.actualizarCompra = async function actualizarCompra(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL actualizarCompra(${data.id},'${data.proveedor}','${data.fecha}');`)
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

querys.eliminarCompra = async function eliminarCompra(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL eliminarCompra(${data.id});`)
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
