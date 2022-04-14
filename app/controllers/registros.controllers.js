const db = require("../models");
const Registro = db.registros;
//Crear y guardar un nuevo registro
exports.create = (req, res) => {
    // Validar que el registro no exista
    Registro.findOne({ folio: req.body.folio })
        .then(registro => {
            if (registro) {
                return res.status(400).send({
                    message: "El registro ya existe"
                });
            } else {
                // Crear un nuevo registro
                const newRegistro = new Registro({
                    folio: req.body.folio,
                    nombre: req.body.nombre,
                    apellidoPa: req.body.apellidoPa,
                    apellidoMa: req.body.apellidoMa,
                    edad: req.body.edad,
                    genero: req.body.genero,
                    IdArea: req.body.IdArea,
                    correoElectronico: req.body.correoElectronico,
                    telefono: req.body.telefono,
                    idCiudad: req.body.idCiudad,
                    idCargo: req.body.idCargo,
                    fecha: new Date()
                });
                // Guardar el registro en la base de datos
                newRegistro.save()
                    .then(data => {
                        res.send(data);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || "Error al crear el registro."
                        });
                    });
            }
        });
};

// Obtener todos los registros
exports.findAll = (req, res) => {
    Registro.find().sort({ apellidoPa: -1 })
        .then(registros => {
            res.send(registros);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al obtener los registros."
            });
        });
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