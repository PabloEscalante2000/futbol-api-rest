import { pool } from "../db.js";

export const getAllAlumnoFromArquero = async (req,res) => {
    try {
        const id = req.params.id
        const [rows] = await pool.query('select * from alumno where id_profesor=?',
        [id])
        res.json(rows)
    } catch(error) {
        return res.status(500).json({
            message: 'Algo salió mal'
        })
    }
}

export const postAlumno = async (req,res) => {
    
    try {
        const {nombre,apellido,edad,sexo,id_profesor} = req.body
        const [rows] = 
            await pool.query('insert into alumno (nombre,apellido,edad,sexo,id_profesor) values (?,?,?,?,?)',
            [nombre,apellido,edad,sexo,id_profesor])
        
        res.sendStatus(204)
    } catch(error){
        return res.status(500).json({
            message: 'Algo salió mal',
            error: error
        })
    }    
    
}

export const putAlumno = async (req,res) => {    
    try {
        const {nombre,apellido,edad,sexo,id_profesor,id} = req.body
        const [rows] = 
            await pool.query('update alumno set nombre = ?, apellido=?, edad=?,sexo=?, id_profesor = ? where id = ?',
            [nombre,apellido,edad,sexo,id_profesor,id])        
        res.sendStatus(204)
    } catch(error){
        return res.status(500).json({
            message: 'Algo salió mal',
            error: error
        })
    }    
}