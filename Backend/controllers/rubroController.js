const rubroQuerys = require('../dbquerys/rubroQuerys')

const controllers = {}

controllers.crearRubro = async function crearRubro(req, res) {
    await rubroQuerys.querys.crearRubro(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerRubros = async function obtenerRubros(req, res) {
    await rubroQuerys.querys.obtenerRubros()
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerRubrosProyecto = async function obtenerRubrosProyecto(req, res) {
    await rubroQuerys.querys.obtenerRubrosProyecto(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.actualizarRubro = async function actualizarRubro(req, res) {
    await rubroQuerys.querys.actualizarRubro(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.eliminarRubro = async function eliminarRubro(req, res) {
    await rubroQuerys.querys.eliminarRubro(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

module.exports.controllers = controllers;
