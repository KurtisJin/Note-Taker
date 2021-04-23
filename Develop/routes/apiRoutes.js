const notesDB = require('../db/db.json');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

module.exports = (app) => {


    app.get("/api/notes", (req, res) => {
        const notes = JSON.parse(fs.readFileSync('./db/db.json'));
        // res.sendFile(path.join(__dirname, "/db/db.json"))
        res.json(notes)
    });

    app.post('/api/notes', (req, res) => {

        const notes = JSON.parse(fs.readFileSync('./db/db.json'));
        const newNotes = req.body;
        newNotes.id = uuid.v4();
        notes.push(newNotes);
        fs.writeFileSync('./db/db.json', JSON.stringify(notes));
        res.json(newNotes);

    });

    app.delete('/api/notes/:id', (req, res) => {

        //read from the file (fs.readFile)
        //parse to JSON (JSON.parse(...)) 
        const notes = JSON.parse(fs.readFileSync('./db/db.json'));
        
        //take in params.
        const delNote = req.params.id;

        // let animals not include cat ["dog", "cat", "bird"]
        //  animals.filter((animal) => animel != "cat") => ["dog", "bird"]
        let filteredNotes = notes.filter((note) => !(note.id == delNote) )
        //filter out the note '.filter() or for loop
        
        //write it to the file (fs.writeFile)

        fs.writeFileSync('./db/db.json', JSON.stringify(filteredNotes));
        res.json(filteredNotes);

    })
}

