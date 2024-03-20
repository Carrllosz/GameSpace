import mysql from "mysql";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@Joao2721",
    database: "produto",
});

export default db;
