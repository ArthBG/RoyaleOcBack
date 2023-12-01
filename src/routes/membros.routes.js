import { Router } from "express";
import { getMembros, createMembro, getMembroByID, atualizarMembro, deleteMembro } from "../controllers/membros.controller.js";

const membroRouter = Router();

membroRouter.get("/", getMembros);
membroRouter.post("/", createMembro);
membroRouter.get("/:id", getMembroByID);
membroRouter.put("/:id", atualizarMembro);
membroRouter.delete("/:id", deleteMembro);

export default membroRouter;