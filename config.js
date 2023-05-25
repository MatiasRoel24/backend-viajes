import dotenv from 'dotenv';
//Carga las variables de entorno
dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://matias_roel:9YOPXgXGoSaZWDAr@cerrajeria.v9vgd2u.mongodb.net/Cerrajeria';
export const PORT = process.env.PORT || 8080;