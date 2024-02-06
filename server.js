const express = require("express");
const app = express();
const port = 3333;

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(__dirname + "/mydb.db");

app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
});

app.get("/N2N", (req, res) => {
    db.serialize(() => {
        db.run(`CREATE TABLE groups (
            group_id INTEGER PRIMARY KEY,
            name TEXT NOT NULL
        )`)
        db.run(`INSERT INTO groups
        VALUES
        (1, "famiglia"),
        (2, "amici"),
        (3, "lavoro")`)
    });
    res.status(200).send();
})

app.delete("/N2N", (req, res) => {
    db.serialize(() => {
        db.run(`DROP TABLE groups`)
    });
    res.status(200).send();
})

app.get("/12N", (req, res) => {

})