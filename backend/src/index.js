const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://sistemaDev:oministack@cluster0-uvxx6.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Para a plicacao receber e reconhecer o formato JSON e routes(rotas)
app.use(express.json());
app.use(routes);


app.listen(3333);
