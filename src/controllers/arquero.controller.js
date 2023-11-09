import { pool } from "../db.js";

export const getAllArquero = async (req,res) => {
    try {
        const [rows] = await pool.query('select * from arquero')
        res.json(rows)
    } catch(error) {
        return res.status(500).json({
            message: 'Algo salió mal'
        })
    }
}

export const getArqueroById = async (req,res) => {
    try {
        const [rows] = await pool.query('select * from arquero where id = ?',[req.params.id])

        if(rows.length <=0 ) return res.status(404).json({
            message:'Arquero no encontrado'
        })

        res.json(rows[0])
    } catch(error) {
        return res.status(500).json({
            message: 'Algo salió mal'
        })
    }
}

export const getArqueroByValidation = async (req,res) => {
    try {
        const [rows] = await pool.query('select * from arquero where correo=? and contra=?',
        [req.params.correo,req.params.contra])

        if(rows.length <= 0) return res.status(404).json({
            message: 'Arquero no encontrado'
        })
        res.json(rows[0])
    } catch(error){
        return res.status(500).json({
            message: 'Algo salió mal'
        })
    }
}

export const postArquero = async (req,res) => {
    
    try {
        const {nombre,apellido,telefono,fecha_nac,correo,contra,usuario,foto,horario} = req.body
        const [rows] = 
            await pool.query('insert into arquero (nombre,apellido,telefono,fecha_nac,correo,contra,usuario,foto,horario) values (?,?,?,?,?,?,?,?,?)',
            [nombre,apellido,telefono,fecha_nac,correo,contra,usuario,foto,horario])
        
        res.sendStatus(204)
    } catch(error){
        return res.status(500).json({
            message: 'Algo salió mal',
            error: error
        })
    }    
    
}

export const putArquero = async (req,res) => {
    
    try {
        const id = req.params.id
        const {nombre,apellido,telefono,fecha_nac,correo,contra,usuario,foto,horario} = req.body
        const [rows] = 
            await pool.query('update arquero set nombre=?, apellido=?,telefono=?, fecha_nac = ?,correo=?, contra=?, usuario=?, foto=?, horario=? where id=?',
            [nombre,apellido,telefono,fecha_nac,correo,contra,usuario,foto,horario,id])
        
        res.sendStatus(204)
    } catch(error){
        return res.status(500).json({
            message: 'Algo salió mal',
            error: error
        })
    }    
    
}

export const deleteArquero = async (req,res) => {
    
    try {
        const [result] = await pool.query('DELETE FROM arquero WHERE id = ?', [req.params.id])

        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'arquero no encontrado'
        })
        res.sendStatus(204)
    } catch(error){
        return res.status(500).json({
            message: 'Algo salió mal'
        })
    }
    
    
}