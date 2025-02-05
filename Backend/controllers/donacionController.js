const proyectoQuerys = require('../dbquerys/proyectoQuerys')

const controllers = {}

controllers.crearDonacion = async function crearDonacion(req, res) {
    await proyectoQuerys.querys.crearDonacion(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerDonaciones = async function obtenerDonaciones(req, res) {
    await proyectoQuerys.querys.obtenerDonaciones(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.actualizarDonacion = async function actualizarDonacion(req, res) {
    await proyectoQuerys.querys.actualizarDonacion(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.eliminarDonacion = async function eliminarDonacion(req, res) {
    await proyectoQuerys.querys.eliminarDonacion(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

module.exports.controllers = controllers;
