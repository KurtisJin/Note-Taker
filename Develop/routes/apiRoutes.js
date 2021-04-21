const notesDB = require('../db/db.json');

module.exports = (app) => {

    app.get('/api/note', (req, res) => res.json(notesDB));

    app.post('/api/notes', (req, res) => {

        notesDB.push(req.body);
        res.json(true);


    })

}