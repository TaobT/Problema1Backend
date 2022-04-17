module.exports = (mongoose) => {
    const Registro = mongoose.model(
        'Registro',
        mongoose.Schema(
            {
                folio: Number,
                nombre: String,
                apellidoPa: String,
                apellidoMa: String,
                edad: Number,
                genero: String,
                idArea: Number,
                correoElectronico: String,
                telefono: String,
                idCiudad: Number,
                idCargo: Number,
                fecha:{
                    type: Date,
                    default: Date.now()
                }
            }
        )
    );
        return Registro;
};