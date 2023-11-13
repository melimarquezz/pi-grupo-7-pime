/* El ENDPOINT de la API */
let apikey= `86a6f1e422ad71ec4aa878598f090973`;
//conecto a la barra de busqueda
let qs = location.search; 
let qsObj = new URLSearchParams(qs);
let buscador = qsObj.get("buscador")

let busqueda = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${buscador}`

fetch(endpoint)
.then(function (res) {
    return res.json();
})
.then(function (data) {
    console.log(data.results);

    let arrayDePersonajes = data.results;
    let seccion = document.querySelector('.container');

    let allCharacters = "";

    for(let i=0; i<arrayDePersonajes.length; i++){
        allCharacters += `<article>
                            <img src=${arrayDePersonajes[i].image} alt='Imagen sobre ${arrayDePersonajes[i].name}'>
                            <p>Name: <a href="./detalle.html?idPersonaje=${arrayDePersonajes[i].id}"> ${arrayDePersonajes[i].name} </a></p>
                            <p>Status: ${arrayDePersonajes[i].status} </p>
                        </article>`
        }

    seccion.innerHTML = allCharacters;

    return data;
})
.catch(function (error) {
    console.log(error);
    return error;
});