const express = require('express');
const fs = require('fs');
const notes = require('./db/db.json');
const path = require('path');
const uuid = require('uuid');

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
const app = express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });

//api get
app.get("api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"))
  });
  
  //api post
  app.post('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync("/db/db.json"))
    const newNotes = req.body;
    newNotes.id = uuid.v4()
    notes.push(newNotes);
    fs.writeFileSync('./db/db.json', JASON.stringify(notes));
    res.json(notes);

  });