const db = require("../models");
const Area = db.areas;
//Crear y guardar una nueva area
exports.create = (req, res) => {
    //Validar que los campos esten llenos
    if (!req.body.idArea) {
        return res.status(400).send({
            message: "El campo idArea es obligatorio"
        });
    }
    if (!req.body.nombreArea) {
        return res.status(400).send({
            message: "El campo nombreArea es obligatorio"
        });
    }
    //Verificar que el area no existe
    Area.findOne({
        where: {
            idArea: req.body.idArea
        }
    }
    ).then(area => {
        if (area) {
            if (area.idArea === req.body.idArea) {
                return res.status(400).send({
                    message: "El area ya existe"
                });
            } else {
                //Crear una nueva area
                const area = new Area({
                    idArea: req.body.idArea,
                    nombreArea: req.body.nombreArea
                });
                //Guardar la area
                area.save()
                    .then(data => {
                        res.send(data);
                    }
                    ).catch(err => {
                        res.status(500).send({
                            message: err.message
                        });
                    }
                    );
            }
        } else {
            //Crear una nueva area
            const area = new Area({
                idArea: req.body.idArea,
                nombreArea: req.body.nombreArea
            });
            //Guardar la area
            area.save()
                .then(data => {
                    res.send(data);
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

//Obtener todas las areas
exports.findAll = (req, res) => {
    Area.find()
        .then(areas => {
            res.send(areas);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message
            });
        }
        );
}

//Obtener una area por su nombre
exports.findByName = (req, res) => {
    Area.findOne({
        where: {
            nombreArea: req.params.nombreArea
        }
    }
    ).then(area => {
        if (!area) {
            return res.status(404).send({
                message: "El area no existe"
            });
        } else {
            res.send(area);
        }
    }
    ).catch(err => {
        res.status(500).send({
            message: err.message
        });
    }
    );
}

//Obtener area por su id
exports.findById = (req, res) => {
    Area.findOne({
        where: {
            idArea: req.params.idArea
        }
    }
    ).then(area => {
        if (!area) {
            return res.status(404).send({
                message: "El area no existe"
            });
        } else {
            res.send(area);
        }
    }
    ).catch(err => {
        res.status(500).send({
            message: err.message
        });
    }
    );
}

//Borrar una area
exports.delete = (req, res) => {
    Area.findOne({
        where: {
            idArea: req.params.idArea
        }
    }
    ).then(area => {
        if (!area) {
            return res.status(404).send({
                message: "El area no existe"
            });
        } else {
            area.destroy()
                .then(data => {
                    res.send(data);
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