const db = require("./db.json");
const fs = require("fs");

function saveNote(note) {
    db.push(note);
    fs.writeFileSync("./db.json", JSON.stringify(db));
}

function getNotes() {
    return db;
}

module.exports = {
    saveNote,
    getNotes,
}