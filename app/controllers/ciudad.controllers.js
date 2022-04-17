const db = require("../models");
const Ciudad = db.ciudades;

//Crear y guardar una nueva ciudad
exports.create = (req, res) => {
    //Validar que los campos esten llenos
    if (!req.body.idCiudad) {
        return res.status(400).send({
            message: "El campo idCiudad es obligatorio"
        });
    }
    if (!req.body.nombreCiudad) {
        return res.status(400).send({
            message: "El campo nombreCiudad es obligatorio"
        });
    }
    //Crear una nueva ciudad
    const ciudad = new Ciudad({
        idCiudad: req.body.idCiudad,
        nombreCiudad: req.body.nombreCiudad
    });
    //Guardar la ciudad
    ciudad.save((err, data) => {
        if (err) {
            return res.status(500).send({
                message: err
            });
        }
        return res.status(200).send({
            message: data
        });
    }
    );
}

//Obtener todas las ciudades
exports.findAll = (req, res) => {
    Ciudad.find().then(ciudades => {
        res.send(ciudades);
    }
    ).catch(err => {
        res.status(500).send({
            message: err
        });
    }
    );
}

//Obtener una ciudad por su nombre
exports.findByName = (req, res) => {
    Ciudad.findOne({
        where: {
            nombreCiudad: req.params.nombre
        }
    }
    ).then(ciudad => {
        if (!ciudad) {
            return res.status(404).send({
                message: "No existe la ciudad"
            });
        }
        res.send(ciudad);
    }
    ).catch(err => {
        res.status(500).send({
            message: err
        });
    }
    );
}

//Borrar una ciudad
exports.delete = (req, res) => {
    Ciudad.findOne({
        where: {
            idCiudad: req.params.id
        }
    }
    ).then(ciudad => {
        if (!ciudad) {
            return res.status(404).send({
                message: "No existe la ciudad"
            });
        }
        ciudad.destroy().then(() => {
            res.send({
                message: "Ciudad eliminada correctamente"
            });
        }
        ).catch(err => {
            res.status(500).send({
                message: err
            });
        }
        );
    }
    ).catch(err => {
        res.status(500).send({
            message: err
        });
    }
    );
}