import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Não existe em uma aplicação real
router.get("/:id", loginRequired, userController.show);
router.get("/", loginRequired, userController.index);

router.post("/", userController.store);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;

/*
index => lista todo os objetos -> GET
store/create => cria um novo objeto -> POST
delete => apaga um objeto => DELETE
show => mostra um objeto -> GET
update => atualiza um objeto -> PATCH ou PUT
*/
