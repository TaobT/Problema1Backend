const db = require("../models");
const Cargo = db.cargos;
//Crear y guardar un nuevo cargo
exports.create = (req, res) => {
    //Validar que los campos esten llenos
    if (!req.body.idCargo) {
        return res.status(400).send({
            message: "El campo cargo es obligatorio"
        });
    }
    if (!req.body.nombreCargo) {
        return res.status(400).send({
            message: "El campo nombre cargo es obligatorio"
        });
    }
    //Validar que el cargo no exista
    Cargo.findOne({
        where: {
            idCargo: req.body.idCargo
        }
    }).then(cargo => {
        if (cargo) {
            if(cargo.idCargo === req.body.idCargo){
                return res.status(400).send({
                    message: "El cargo ya existe"
                });
            } else {
                //Guardar el cargo
                Cargo.create({
                    idCargo: req.body.idCargo,
                    nombreCargo: req.body.nombreCargo
                }).then(cargo => {
                    res.send(cargo);
                }
                ).catch(err => {
                    res.status(500).send({
                        message: err.message
                    });
                }
                );
            }
        } else {
            //Guardar el cargo
            Cargo.create({
                idCargo: req.body.idCargo,
                nombreCargo: req.body.nombreCargo
            }).then(cargo => {
                res.send(cargo);
            }
            ).catch(err => {
                res.status(500).send({
                    message: err.message
                });
            }
            );
        }
    }
    ).catch(err => {
        res.status(500).send({
            message: err.message
        });
    }
    );
}
//Obtener todos los cargos
exports.findAll = (req, res) => {
    Cargo.find().then(cargos => {
        res.send(cargos);
    }
    ).catch(err => {
        res.status(500).send({
            message: err.message
        });
    }
    );
}
//Obtener cargos por su nombre
exports.findByName = (req, res) => {
    Cargo.find({
        where: {
            nombreCargo: req.params.nombreCargo
        }
    }).then(cargos => {
        res.send(cargos);
    }
    ).catch(err => {
        res.status(500).send({
            message: err.message
        });
    }
    );
}

//Borrar un cargo
exports.delete = (req, res) => {
    Cargo.destroy({
        where: {
            idCargo: req.params.idCargo
        }
    }).then(cargo => {
        res.send(cargo);
    }
    ).catch(err => {
        res.status(500).send({
            message: err.message
        });
    }
    );
}
