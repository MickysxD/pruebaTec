const proyectoQuerys = require('../dbquerys/proyectoQuerys')

const controllers = {}

controllers.crearCompra = async function crearCompra(req, res) {
    await proyectoQuerys.querys.crearCompra(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.obtenerCompras = async function obtenerCompras(req, res) {
    await proyectoQuerys.querys.obtenerCompras()
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.actualizarCompra = async function actualizarCompra(req, res) {
    await proyectoQuerys.querys.actualizarCompra(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

controllers.eliminarCompra = async function eliminarCompra(req, res) {
    await proyectoQuerys.querys.eliminarCompra(req.body)
        .then(response => {
            res.status(200).json(response);
        }).catch(error => {
            res.status(400).end();
        });
}

module.exports.controllers = controllers;
