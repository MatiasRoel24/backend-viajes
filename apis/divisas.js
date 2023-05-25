
import fetch from "node-fetch"

export const divisasApi = async(base = "usd", places = 2) => {

    let url =  `https://api.exchangerate.host/latest?base=${base}&places=${places}`
    
    let divisas = await fetch(url)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
    
    return divisas
}