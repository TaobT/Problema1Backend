module.exports = app => {
    const areas = require("../controllers/area.controllers.js");
    var router = require("express").Router();
    //Crear y guardar una nueva area
    router.post("/", areas.create);
    //Obtener todas las areas
    router.get("/", areas.findAll);
    //Obtener un area por su nombre
    router.get("/:nombre", areas.findByName);
    //Borrar un area
    router.delete("/:id", areas.delete);
    //Obtener un area por su id
    router.get("/:id", areas.findById);
    app.use("/api/areas", router);
}