const employeeCtrl = {};
const Employee = require("../Models/Employees");
const jwt = require('jsonwebtoken');

employeeCtrl.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Ocurrio un error');
    }
};

employeeCtrl.createEmployees = async (req, res) => {
    const { Cedula, Nombre, Apellido, Correo, Contrasena, Telefono, Direccion, Cargo } = req.body;
    const newEmployee = await Employee.findOne({ Correo });
    if (newEmployee) {
        return res.status(400).json({
            msg: `Ya existe  el correo`
        })
    }
    try {
        await Employee.create({
            Cedula: Cedula,
            Nombre: Nombre,
            Apellido: Apellido,
            Correo: Correo,
            Contrasena: Contrasena,
            Telefono: Telefono,
            Direccion: Direccion,
            Cargo: Cargo
        })
        const token = jwt.sign({ _id: Employee._id }, 'secretkey');
        res.status(200).json({
            token,
            msg: `Usuario ${Correo} creado exitosamente! `
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Ha ocurrio un error'
        })
    }
};
employeeCtrl.getEmployee = async (req, res) => {

    try {
        const employee = await Employee.findById(req.params.id);
        res.send(employee);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Ocurrio un error');
    }
};

employeeCtrl.editEmployees = async (req, res) => {
    try {
        await Employee.findByIdAndUpdate(req.params.id, req.body);
        res.json({ status: "Empleado actualiado" });
    } catch (err) {
        console.log(err);
        res.status(500).send('Ocurrio un error');
    }
};

employeeCtrl.deleteEmployees = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ status: "Empleado eliminado" });
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Ocurrio un error');
    }
};

employeeCtrl.loginEmployee = async (req, res) => {
    const { Correo, Contrasena } = req.body;
    const employee = await Employee.findOne({ Correo });
    if (!employee) {
        return res.status(401).send("No existe el correo")
    };
    if (employee.Contrasena !== Contrasena) {
        return res.status(401).send("Contraseña incorrecta");
    }
    const token = await jwt.sign({ _id: employee._id }, 'secretkey');
    const cargo = await ({ Cargo: employee.Cargo }, employee.Cargo);
    const nombre = await ({ Nombre: employee.Nombre }, employee.Nombre);
    const apellido = await ({ Apellido: employee.Apellido }, employee.Apellido);
    res.status(200).json({ token, cargo, nombre, apellido });

};

module.exports = employeeCtrl;






