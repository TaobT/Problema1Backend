module.exports = (mongoose) => {
    const Cargo = mongoose.model(
        'Cargo',
        mongoose.Schema(
            {
                idCargo: Number,
                nombreCargo: String
            }
        )
    );
        return Cargo;
};
