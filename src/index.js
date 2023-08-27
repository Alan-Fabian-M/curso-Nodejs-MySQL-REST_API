import expres from 'express'

const app = expres()

app.get('/employees', (req,res)=>res.send('Obteniendo empleados'))

app.post('/employees', (req,res)=>res.send('creando empleados'))

app.put('/employees', (req,res)=>res.send('actualizando empleados'))

app.delete('/employees', (req,res)=>res.send('eliminando empleados'))



app.listen(3000)
console.log('Server on port 3000')
