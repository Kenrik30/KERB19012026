//Definicion de esquema de cliente
const mongoose = require(`mongoose`);

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    //Otros del cliente de ser necesario
});

module.exports = mongoose.model(`Client`, clientSchema);
