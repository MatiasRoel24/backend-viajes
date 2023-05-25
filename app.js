import express from 'express';
import routes from "./routes/routes.js";
//Archivo que solo configura express

//Creamos express
const app = express();
//Interpreta el objeto json // middlewares
app.use(express.json())
//Rutas de posteo
app.use(routes);

export default app;