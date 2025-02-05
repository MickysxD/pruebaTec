const proyectoQuerys = require('../dbquerys/proyectoQuerys')

const controllers = {}

controllers.crearRubro = async function crearRubro(req, res) {
    await proyectoQuerys.querys.crearRubro(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerRubros = async function obtenerRubros(req, res) {
    await proyectoQuerys.querys.obtenerRubros()
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.actualizarRubro = async function actualizarRubro(req, res) {
    await proyectoQuerys.querys.actualizarRubro(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.eliminarRubro = async function eliminarRubro(req, res) {
    await proyectoQuerys.querys.eliminarRubro(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

module.exports.controllers = controllers;
