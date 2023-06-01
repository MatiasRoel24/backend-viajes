import dotenv from 'dotenv';
//Carga las variables de entorno
dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://matias_roel:gFLM5kzYVAwvgnod@appviajes.wzmctjw.mongodb.net/AppViajes';
export const PORT = process.env.PORT || 8080;
