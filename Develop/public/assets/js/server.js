const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];
const waitList = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'view_tables.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reservations.html')));

app.get('/api/reservations', (req, res) => res.json(reservations));
app.get('/api/waitList', (req, res) => res.json(waitList));

app.post('/api/reservations', (req, res) => {
  const newReserve = req.body;
})