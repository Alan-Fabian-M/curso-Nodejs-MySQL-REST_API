import {pool} from "../db.js";

export const getEmployees = (req,res)=>res.send('Obteniendo empleados')

export const createEmployees = async (req,res)=>{
  const {name, salary} = req.body
  const [rows] = await pool.query('INSERT INTO employee (name , salary) VALUES (?,?)', [name,salary])
  res.send({
    id: rows.insertId,
    name,
    salary
  })
}

export const updateEmployees = (req,res)=>res.send('actualizando empleados')

export const deleteEmployees = (req,res)=>res.send('eliminando empleados')