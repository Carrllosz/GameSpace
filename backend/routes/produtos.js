import express from "express";
import { getProdutos, criarProduto, deletarProduto } from "../controllers/produtosController.js";

export const produtosRouter = express.Router();


// Restante das rotas relacionadas aos produtos...
produtosRouter.get("/", getProdutos);
produtosRouter.post("/", criarProduto);
produtosRouter.delete("/:id", deletarProduto);
