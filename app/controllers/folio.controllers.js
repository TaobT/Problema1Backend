const db = require("../models");
const Folio = db.folios;
//Crear y guardar un nuevo folio
exports.create = (req, res) => {
    //Validar que los campos esten llenos
    if (!req.body.folio) {
        return res.status(400).send({
            message: "El campo folio es obligatorio"
        });
    }
    //Crear un nuevo folio
    const folio = new Folio({
        folio: req.body.folio,
    });
    //Guardar el folio en la base de datos
    folio.save()
        .then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Algo salio mal"
            });
        }
        );
}
//Obtener todos los folios
exports.findAll = (req, res) => {
    Folio.find()
        .then(folios => {
            res.send(folios);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Algo salio mal"
            });
        }
        );
}