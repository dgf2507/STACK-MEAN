const { Schema, model } = require('mongoose');

const InfraccionesSchema = new Schema(
    {
        PlacaVehicular: { type: String, require: true },
        Sancion: { type: String, require: true, },
        Valor: { type: Number, require: true },
        Pagado: { type: Boolean, require: true },
        Marca: { type: String, require: true },
        ModeloVehiculo: { type: String, require: true },
        TipoVehiculo: { type: String, require: true },
        ColorVehiculo: { type: String, require: true },
        Ruta: { type: String, require: true },

    }
    , {
        timestamps: true,
        versionKey: false
    }, {
    collection: 'Infracciones'
}
);

module.exports = model('Infracciones', InfraccionesSchema)