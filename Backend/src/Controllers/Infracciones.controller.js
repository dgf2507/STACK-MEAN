const InfraccionesCtrl = {};
const Infraccion = require("../Models/Infracciones");

InfraccionesCtrl.getInfracciones = async (req, res) => {
  try {
    const infracciones = await Infraccion.find();
    res.json(infracciones);
  }
  catch (err) {
    res.status(500).send('Ocurrio un error');
  }
};

InfraccionesCtrl.createInfracciones = async (req, res) => {
  try {
    const newInfraccion = new Infraccion(req.body);
    await newInfraccion.save()
    res.json({
      status: 'Multa generada exitosamente'
    });
  }
  catch (err) {
    res.status(500).send('Ocurrio un error');
  }

};

InfraccionesCtrl.getInfraccion = async (req, res) => {

  try {
    const infraccion = await Infraccion.findById(req.params.id)
    res.send(infraccion)
  }
  catch (err) {

    res.status(500).send('Ocurrio un error');
  }
};

InfraccionesCtrl.editInfracciones = async (req, res) => {
  try {
    await Infraccion.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: 'Multa Actualizada' })
  }
  catch (err) {
    res.status(500).send('Ocurrio un error');
  }
};

InfraccionesCtrl.deleteInfracciones = async (req, res) => {
  try {
    await Infraccion.findByIdAndDelete(req.params.id)
    res.json({ status: 'Multa Eliminada' })
  }
  catch (err) {
    res.status(500).send('Ocurrio un error');
  }
};

InfraccionesCtrl.buscar = async (req, res) => {
  const { PlacaVehicular } = req.body;
  const infraccion = await Infraccion.find({ PlacaVehicular });
  if (infraccion.length === 0) {
    return res.status(400).json({
      msg: `No existen infracciones`
    })
  }
  try {
    return res.status(200).json(infraccion);
  }
  catch (err) {
    res.status(500).send('Ocurrio un error');
  }
}

module.exports = InfraccionesCtrl;
