import { Router } from "express";
import { getAllArquero } from "../controllers/arquero.controller.js";
import { getArqueroById } from "../controllers/arquero.controller.js";
import { deleteArquero } from "../controllers/arquero.controller.js";
import { postArquero } from "../controllers/arquero.controller.js";
import { getArqueroByValidation } from "../controllers/arquero.controller.js";

const router = Router()

//GET
router.get('/arquero',getAllArquero)
router.get('/arquero/:id',getArqueroById)
router.get('/arquero/validation/:correo/:contra',getArqueroByValidation)

//POST
router.post('/arquero',postArquero)

//DELETE
router.delete('/arquero/:id',deleteArquero)

export default router