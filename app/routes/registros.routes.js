module.exports = app => {
    const registros = require("../controllers/registros.controllers.js");
    var router = require("express").Router();
    //Crear y guardar un nuevo registro
    router.post("/", registros.create);
    //Obtener todos los registros ordenados por apellido paterno
    router.get("/", registros.findAll);
    //Obtener registros por su fecha de registro
    router.get("/:fecha", registros.findByDate);
    app.use("/api/registros", router);
}