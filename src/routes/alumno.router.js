import { Router } from "express";
import {getAllAlumnoFromArquero, postAlumno, putAlumno} from '../controllers/alumno.controller.js'

const router = Router()

//GET
router.get('/alumno/porProfesor/:id',getAllAlumnoFromArquero)

//POST
router.post('/alumno',postAlumno)

//PUT
router.put('/alumno',putAlumno)

export default router