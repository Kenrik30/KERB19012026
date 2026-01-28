const mongoose = require(`mongoose`);

//Conectar a la base de datos de MongoDB
mongoose.connect("mongodb://localhost:27017/practica6", {
})

.then(() => console.log(`Conexion exitosa a MongoDB`))
.catch(err => console.error(`Error de conexion a MongoDB:`, err));
