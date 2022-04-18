const db = require("../models");
const Registro = db.registros;
//Crear y guardar un nuevo registro
exports.create = (req, res) => {
    //Validar que los campos esten llenos
    if (!req.body.folio) {
        return res.status(400).send({
            message: "El campo folio es obligatorio"
        });
    }
    if (!req.body.nombre) {
        return res.status(400).send({
            message: "El campo nombre es obligatorio"
        });
    }
    if (!req.body.apellidoPa) {
        return res.status(400).send({
            message: "El campo apellido paterno es obligatorio"
        });
    }
    if (!req.body.apellidoMa) {
        return res.status(400).send({
            message: "El campo apellido materno es obligatorio"
        });
    }
    if (!req.body.edad) {
        return res.status(400).send({
            message: "El campo edad es obligatorio"
        });
    }
    if (!req.body.genero) {
        return res.status(400).send({
            message: "El campo genero es obligatorio"
        });
    }
    if (!req.body.idArea) {
        return res.status(400).send({
            message: "El campo area es obligatorio"
        });
    }
    if (!req.body.correoElectronico) {
        return res.status(400).send({
            message: "El campo correo electronico es obligatorio"
        });
    }
    if (!req.body.telefono) {
        return res.status(400).send({

            message: "El campo telefono es obligatorio"
        });
    }
    if (!req.body.idCiudad) {
        return res.status(400).send({
            message: "El campo ciudad es obligatorio"
        });
    }
    if (!req.body.idCargo) {
        return res.status(400).send({
            message: "El campo cargo es obligatorio"
        });
    }
    //Crear un nuevo registro
    const registro = new Registro({
        folio: req.body.folio,
        nombre: req.body.nombre,
        apellidoPa: req.body.apellidoPa,
        apellidoMa: req.body.apellidoMa,
        edad: req.body.edad,
        genero: req.body.genero,
        idArea: req.body.idArea,
        correoElectronico: req.body.correoElectronico,
        telefono: req.body.telefono,
        idCiudad: req.body.idCiudad,
        idCargo: req.body.idCargo
    });
    //Guardar el registro en la base de datos
    registro.save((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        } else {
            res.send(data);
        }
    }
    );
}

// Obtener todos los registros ordenados por apellido paterno
exports.findAll = (req, res) => {
    Registro.find()
        .sort({ apellidoPa: -1 })
        .then(registros => {
            res.send(registros);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Error al obtener los registros."
            });
        }
        );
}

// Obtener registros por su fecha de registro
exports.findByDate = (req, res) => {
    fechaBuscar = new Date(req.params.fecha);
    Registro.find({$and: [{fecha: {$gte: fechaBuscar}}, {fecha: {$lt: new Date(new Date(req.params.fecha).getFullYear(), new Date(req.params.fecha).getMonth(), new Date(req.params.fecha).getDate()+1)}}] }).sort({ apellidoPa: -1 })
        .then(registros => {
            res.send(registros);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al obtener los registros."
            });
        });
}

