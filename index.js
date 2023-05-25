import { connectDB } from './db.js';
import { PORT } from './config.js';
import app from './app.js';

//Conexion a base de datos
connectDB();

app.listen(PORT);
console.log('El servidor esta corriendo en el puerto', PORT);