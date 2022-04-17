module.exports = (mongoose) => {
    const Folio = mongoose.model(
        'Folio',
        mongoose.Schema(
            {
                folio: Number
            }
        )
    );
        return Folio;
};