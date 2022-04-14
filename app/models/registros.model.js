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
                IdArea: String,
                correoElectronico: String,
                telefono: String,
                idCiudad: String,
                idCargo: String,
                fecha: Date
            }
        )
    );
        return Registro;
};