import { Router } from "express";
import userController from "../controllers/UserController";

const router = new Router();

router.post("/", userController.store);
router.get("/", userController.index);
router.get("/:id", userController.show);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);

export default router;

/*
index => lista todo os objetos -> GET
store/create => cria um novo objeto -> POST
delete => apaga um objeto => DELETE
show => mostra um objeto -> GET
update => atualiza um objeto -> PATCH ou PUT
*/
