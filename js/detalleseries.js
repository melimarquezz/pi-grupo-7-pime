/* El ENDPOINT de la API */
let apikey= `86a6f1e422ad71ec4aa878598f090973`;

let qs = location.search; // llega en string
let qsObj = new URLSearchParams(qs); // convertirlo a objeto literal
let id = qsObj.get("idPersonaje"); 
// recuperar elementos del dom
let imagen = document.querySelector(".imagen");
let titulo = document.querySelector(".titulo");
let status = document.querySelector(".status");

fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`)

.then(function (res) {
    return res.json();
})
.then(function (data) {

    console.log(data);
    imagen.src = data.poster_path;
    titulo.innerText = `Nombre: ${data.name}`;
    status.innerText = `Status: ${data.status}`;


    return data;
})
.catch(function (error) {
    console.log(error);
    return error;
})