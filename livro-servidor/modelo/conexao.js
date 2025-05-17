const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/livraria";

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

mongoose
    .connect(url, options)
    .then(() => {
        console.log("MongoDB conectado com sucesso!");
    })
    .catch((err) => {
        console.log("Erro ao conectar com mongoDB", err);
    });

module.exports = mongoose;
