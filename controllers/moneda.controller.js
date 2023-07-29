import { request, response } from "express";
import { divisasApi } from "../apis/divisas.js";
import { dolarApi } from "../apis/dolar.js";

// TODO: ----HAY QUE REALIZAR VALIDACIONES DE AL RECIBIR LOS PARAMETROS---- 

/* 
body: 
   {
      "type":"blue"
   }
*/
export const getDolar = async(req, res) => {
   const { type } = req.body;
   const dolar =  await dolarApi();

   return res.send(dolar[type]);
}

/*
Params:
   {
      "base": {valor de moneda}
      "places": {cantidad de decimales}
   }
Body:
   {
      "country": {acronimo del pais}
   }
*/
export const getDivisas = async(req = request, res= response) => {
   const { country }  = req.body;
   const { base, places } = req.query;
  
   let divisas =  await divisasApi(base,places);

   return res.json(divisas.rates[country]);
}

/*
Body:
   {
      "mexicanos": {cantidad de pesos}
      "valorMexicanos": {valor del peso mexicano}
   }
*/

export const getMexicanoToPeso = async(req,res) => {
   const { mexicanos, valorMexicano }  = req.params;
   let mexicano;

   //APIS
   const divisas =  await divisasApi();
   const dolar =  await dolarApi();

   //Varibles de dolar/mexicano
   const dolarBlue = dolar.blue.value_sell;

   if(valorMexicano !== 0){
      mexicano = valorMexicano
   }else{
      mexicano = divisas.rates["MXN"];
   }
   
   //Cuentas
   const dolares = (mexicanos / mexicano).toFixed(2);
   const pesos = (dolares * dolarBlue).toFixed(2);


   return res.json({
      cantida_mexicanos: mexicanos,
      cantida_dolares: dolares,
      cantida_pesos: pesos
   });
}

