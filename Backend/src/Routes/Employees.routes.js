const { Router } = require('express');
const router = Router();
const employeeCtrl = require('../Controllers/Employees.controller.js')

router.get('/', employeeCtrl.getEmployees);
router.post('/', employeeCtrl.createEmployees);
router.get('/:id', employeeCtrl.getEmployee);
router.put('/:id', employeeCtrl.editEmployees);
router.delete('/:id', employeeCtrl.deleteEmployees);
router.post('/login', employeeCtrl.loginEmployee);

module.exports = router;