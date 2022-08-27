import { Router } from "express";
import userController from "../controllers/UserController";

const router = new Router();

router.post("/", userController.store);

export default router;

/*
index => lista todo os objetos -> GET
store/create => cria um novo objeto -> POST
delete => apaga um objeto => DELETE
show => mostra um objeto -> GET
update => atualiza um objeto -> PATCH ou PUT
*/
