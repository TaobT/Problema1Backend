module.exports = (app) => {
    const cargos = require("../controllers/cargo.controllers.js");
    var router = require("express").Router();
    //Crear y guardar un nuevo cargo
    router.post("/", cargos.create);
    //Obtener todos los cargos
    router.get("/", cargos.findAll);
    //Obtener cargos por su nombre
    router.get("/:nombre", cargos.findByName);
    //Borrar un cargo
    router.delete("/:id", cargos.delete);
    app.use("/api/cargos", router);
}

