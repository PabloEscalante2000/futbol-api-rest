import express from 'express'
import arqueroRoutes from './routes/arquero.router.js'
import alumnoRoutes from './routes/alumno.router.js'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api',arqueroRoutes)
app.use('/api',alumnoRoutes)

// en caso de entrar a un router no creado
app.use((req,res,next)=>{
    res.status(404).json({
        message: 'Not found'
    })
})

export default app