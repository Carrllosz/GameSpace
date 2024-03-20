import express from "express";
import cors from "cors";
import { produtosRouter } from "./routes/produtos.js";
import { usersRouter } from "./routes/user.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", usersRouter);
app.use("/produtos", produtosRouter);

app.listen(8800, () => {
    console.log("Server is running on port 8800");
});
