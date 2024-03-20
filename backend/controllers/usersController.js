import db from "../db.js";

export const getUser = (req, res) => {
    const q = "SELECT * FROM user";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
};

export const criarUser = (req, res) => {
    const q = "INSERT INTO user (`nome`, `email`,`senha`, `tipodeusuario`) VALUES (?)";
    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha,
        req.body.tipodeusuario,
    ];

    db.query(q, [values], (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json("Usuário foi cadastrado com sucesso!");
    });
};

export const login = (req, res) => {
    const q = "SELECT * FROM user WHERE `email` = ? AND `senha` = ?";
    db.query(q, [req.body.email, req.body.senha], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0){
            return res.json("Sucesso")
        } else {
            return res.json("Falhou")
        }
    });
};