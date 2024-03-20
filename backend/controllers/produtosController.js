import db from "../db.js";

export const getProdutos = (req, res) => {
    const q = "SELECT * FROM produtos";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
};

export const criarProduto = (req, res) => {
    const q = "INSERT INTO produtos (`nome`, `descricao`,`preco`, `categoria`, `quantidade`, `foto`) VALUES (?)";
    const values = [
        req.body.nome,
        req.body.descricao,
        req.body.preco,
        req.body.categoria,
        req.body.quantidade,
        req.body.foto,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

export const deletarProduto = (req, res) => {
    const produtoId = req.params.id;
    const q = "DELETE FROM produtos WHERE id = ?";

    db.query(q, [produtoId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Produto foi deletado com sucesso!");
    });
};