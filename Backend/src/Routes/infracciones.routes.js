const { Router } = require("express");
const router = Router();
const InfraccionesCtrl = require("../Controllers/Infracciones.controller.js");

router.get("/", InfraccionesCtrl.getInfracciones);
router.post("/", InfraccionesCtrl.createInfracciones);
router.get("/:id", InfraccionesCtrl.getInfraccion);
router.put("/:id", InfraccionesCtrl.editInfracciones);
router.delete("/:id", InfraccionesCtrl.deleteInfracciones);
router.post("/buscar", InfraccionesCtrl.buscar);

module.exports = router;

