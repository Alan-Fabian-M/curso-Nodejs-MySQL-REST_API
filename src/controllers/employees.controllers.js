import {pool} from "../db.js";

export const getEmployees = async(req,res)=>{
    const [rows] = await pool.query('SELECT * FROM employee')
    res.json(rows)
}

export const getEmployee = async(req,res)=> {
  const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
  console.log(rows)

  if(rows.length <= 0 ) return res.status(404).json({
    message : 'Employee not found'
  })

  res.json(rows[0])
}

export const createEmployees = async (req,res)=>{
  const {name, salary} = req.body
  const [rows] = await pool.query('INSERT INTO employee (name , salary) VALUES (?,?)', [name,salary])
  res.send({
    id: rows.insertId,
    name,
    salary
  })
}

export const deleteEmployees = async(req,res)=>{
  const [result] = await pool.query('DELETE FROM employee where id = ?', [req.params.id] )
  console.log(result)
  if(result.affectedRows <= 0 ) return res.status(404).json({
    message: 'Employee not found'
  })

  res.sendStatus(204)
}

export const updateEmployees = (req,res)=>res.send('actualizando empleados')
