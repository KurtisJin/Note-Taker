const notesDB = require('../db/db.json');

module.exports = (app) => {

    app.get('/api/note', (req, res) => res.json(notesDB));

        const notes = JSON.parse(fs.readFileSync("/db/db.json"));
        const newNotes = req.body;
        newNotes.id = uuid.v4();
        notes.push(newNotes);

    app.post('/api/notes', (req, res) => {

        fs.writeFileSync('./db/db.json', JASON.stringify(notes));
        res.json(notes);
        // notesDB.push(req.body);
        // res.json(true);

    });

    app.delete('/api/notes/:')
}

