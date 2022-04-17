module.exports = (mongoose) => {
    const Ciudad = mongoose.model(
        'Ciudad',
        mongoose.Schema(
            {
                idCiudad: Number,
                nombreCiudad: String
            }
        )
    );
        return Ciudad;
}