const express = require('express');
const book = require('./routes/book');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.use('/book/', book);
app.use((err, _req, res, _next) => res.status(500).json(err = "Erro"));

app.listen(PORT, () => console.log(`Online porta: ${PORT}`));
