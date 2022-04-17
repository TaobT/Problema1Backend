module.exports = app => {
    const folios = require("../controllers/folio.controllers.js");
    var router = require("express").Router();
    //Crear y guardar un nuevo folio
    router.post("/", folios.create);
    //Obtener todos los folios
    router.get("/", folios.findAll);
    app.use("/api/folios", router);
}