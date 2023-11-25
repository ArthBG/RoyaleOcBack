import { Router } from "express";
import { getCards, createCard, getCardByID, updateCard, deleteCard } from "../controllers/cards.controller.js";

const cardRouter = Router();

cardRouter.get("/", getCards);
cardRouter.post("/", createCard);
cardRouter.get("/:id", getCardByID);
cardRouter.put("/:id", updateCard);
cardRouter.delete("/:id", deleteCard);

export default cardRouter;