import { Router } from 'express';
import {
    createContatos,
    deleteContatos,
    getSContatosById,
    getContatos,
    updateContatos 
} from "../controllers/contatos.controller.js";

const contatosRoutes = Router();

contatosRoutes.get("/", getContatos);

contatosRoutes.get("/:id", getSContatosById);

contatosRoutes.post("/", createContatos);

contatosRoutes.put("/:id", updateContatos);

contatosRoutes.delete("/:id", deleteContatos);


export default contatosRoutes;