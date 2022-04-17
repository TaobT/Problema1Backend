module.exports = app => {
    const ciudades = require("../controllers/ciudad.controllers.js");
    var router = require("express").Router();
    //Crear y guardar una nueva ciudad
    router.post("/", ciudades.create);
    //Obtener todas las ciudades
    router.get("/", ciudades.findAll);
    //Obtener ciudad por su nombre
    router.get("/:nombre", ciudades.findByName);
    //Borrar una ciudad
    router.delete("/:id", ciudades.delete);
    app.use("/api/ciudades", router);
}