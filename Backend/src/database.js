

const mongoose = require("mongoose");


mongoose
    .connect('mongodb+srv://Diego:12345@semertazdb.ct2jgno.mongodb.net/Semertaz?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true,



    })
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err));

