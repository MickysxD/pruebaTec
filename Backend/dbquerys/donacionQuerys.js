const db = require('../database/database');

const querys = {};

querys.crearDonacion = async function crearDonacion(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL crearDonacion('${data.nombre}');`)
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

querys.obtenerDonaciones = async function obtenerDonaciones(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL obtenerDonaciones(${data.id});`)
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

querys.actualizarDonacion = async function actualizarDonacion(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL actualizarDonacion(${data.id},'${data.donador}',${data.monto},'${data.fecha}',${data.proyectorubro_id});`)
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

querys.eliminarDonacion = async function eliminarDonacion(data) {
    return new Promise(async (resolve, reject) => {
        await db.ejecutarQuery(`CALL eliminarDonacion(${data.id});`)
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
