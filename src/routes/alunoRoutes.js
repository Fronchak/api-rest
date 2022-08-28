import { Router } from "express";
import alunoController from "../controllers/AlunoController";

const router = new Router();
router.get("/", alunoController.index);
router.post("/", alunoController.store);
router.delete("/:id", alunoController.delete);
router.put("/:id", alunoController.update);
router.get("/:id", alunoController.show);

export default router;
