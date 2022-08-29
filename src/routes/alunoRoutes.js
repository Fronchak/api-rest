import { Router } from "express";
import alunoController from "../controllers/AlunoController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();
router.get("/", alunoController.index);
router.post("/", loginRequired, alunoController.store);
router.delete("/:id", loginRequired, loginRequired, alunoController.delete);
router.put("/:id", loginRequired, alunoController.update);
router.get("/:id", alunoController.show);

export default router;
