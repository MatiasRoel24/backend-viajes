
import fetch from "node-fetch"

export const dolarApi = async() => {
    let url = "https://api.bluelytics.com.ar/v2/latest"
    
    let dolares = await fetch(url)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
    
    return dolares
}