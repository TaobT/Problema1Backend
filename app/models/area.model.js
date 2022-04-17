module.exports = (mongoose) => {
    const Area = mongoose.model(
        'Area',
        mongoose.Schema(
            {
                idArea: Number,
                nombreArea: String
            }
        )
    );
        return Area;
};