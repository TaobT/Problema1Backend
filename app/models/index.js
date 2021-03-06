const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.registros = require("./registros.model.js")(mongoose);
db.ciudades = require("../models/ciudad.model.js")(mongoose);
db.folios = require("../models/folio.model.js")(mongoose);
db.areas = require("../models/area.model.js")(mongoose);
db.cargos = require("../models/cargo.model.js")(mongoose);
module.exports = db;