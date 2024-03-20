import express from "express";
import { getUser, criarUser, login } from "../controllers/usersController.js";

export const usersRouter = express.Router();

// Rota para registro de usuários
usersRouter.get("/", getUser);

usersRouter.post("/signup", criarUser);

usersRouter.post("/login", login);

export default usersRouter;
