const db = require('../database/database');

const querys = {};

querys.crearRubro = async function crearRubro(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL crearRubro('${data.nombre}');`)
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

querys.obtenerRubros = async function obtenerRubros() {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL obtenerRubros();`)
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

querys.actualizarRubro = async function actualizarRubro(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL actualizarRubro(${data.id},'${data.nombre}');`)
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

querys.eliminarRubro = async function eliminarRubro(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL eliminarRubro(${data.id});`)
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
