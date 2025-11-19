import {Router} from "express";
import * as UserController from '../controllers/userController';

const router = Router();

router.get("/",UserController.obtenerUsuarios);
router.get("/:id", UserController.obtenerUsuarioId);
router.post("/", UserController.crearUsuario);
router.put("/:id", UserController.actualizarUsuario);
router.delete("/:id",UserController.eliminarUsuario);


export default router;