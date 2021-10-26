const express = require('express');
const jokesController = require('./controllers/jokesController');

const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', jokesController.listJokes);

app.listen(PORT, () => console.log(`Online porta:${PORT}`));
