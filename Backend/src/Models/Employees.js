const mongoose = require("mongoose");
const { Schema } = mongoose;

const EmployeesSchema = new Schema(
    {
        Cedula: { type: String, required: true },
        Nombre: { type: String, required: true },
        Apellido: { type: String, required: true },
        Cargo: { type: String, required: true },
        Direccion: { type: String, required: true },
        Telefono: { type: String, required: true },
        Correo: { type: String, required: true },
        Contrasena: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: false,
    }
);

module.exports = mongoose.model("Empleados", EmployeesSchema);