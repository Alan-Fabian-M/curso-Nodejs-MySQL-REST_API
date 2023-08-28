import {Router} from "express";
import {getEmployees, createEmployees, updateEmployees, deleteEmployees, getEmployee} from "../controllers/employees.controllers.js";

const router = Router();

router.get('/employees', getEmployees );

router.get('/employee/:id', getEmployee );

router.post('/employees', createEmployees);

router.put('/employees', updateEmployees);

router.delete('/employees', deleteEmployees);

export default router