/* El ENDPOINT de la API */
let apikey= `86a6f1e422ad71ec4aa878598f090973`;

let qs = location.search; // llega en string
let qsObj = new URLSearchParams(qs); // convertirlo a objeto literal
let id_pelicula = qsObj.get("id"); 
// recuperar elementos del dom
let contenedor = document.querySelector("#container");


let url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${apikey}`;

console.log(url);
fetch(url)
.then(function (res) {
    return res.json();
})
.then(function (data) {
    console.log(data);
    let generos = "";
    for (let index = 0; index < data.genres.length; index++) {
      generos += ` <a href="./detalledegenero.html?id=${data.genres[index].id}" class = "linkp"> ${data.genres[index].name}</a> `
        
    }
        contenedor.innerHTML += ` <article>        
        <h1 id = "titulop"> ${data.original_title}</h1>                                     
        <img id = "spiderm" src= "https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="spiderm">         
        <p class = "parrafo" id = "sub">Fecha de estreno: <p>
        <p class = "paf" id = "izq" > ${data.release_date} </p>
        <p class = "parrafo" id = "sub">Duración: </p>
        <p  class = "paf" id = "izq" > ${data.runtime} </p>
        <p class = "parrafo" id = "sub">Calificación: </p>          
        <p  class = "paf" id = "izq" > ${data.popularity} </p>
        <p class = "parrafo" id = "sub">Género: </p>

        <p  class = "paf" id = "izq" >
           ${generos}
            
        </p>

        <p class = "parrafo" id = "sub"> Sinopsis </p>
        <p class = "paf mediaseries" id = "izq" >${data.overview}</p>

        <button class="Recomendacion" type="button">Ver Recomendaciones</button>


       
    </article>  `;                                     
    

})
.catch(function (error) {
    console.log(error);
    return error;
})

//Get recommendations hay q hacer un fetch que llame a un boton que despliegue opciones al hacer click

verRecomendaciones.addEventListener('click',function(){
    let url =  `https://api.themoviedb.org/3/movie/${id_pelicula}/recommendations?api_key=${apikey}`;
    console.log(url);
    fetch(url)
        .then(function(response){
            return res.json();
        })
        .then(function (data) {
            console.log(data);

            recomendacionesDisplay.style.display = 'block';

            let recomendaciones = data.results;
            let lista = "";

            for (let i = 0; i < 5; i++){
                lista += ` <li class = "...">
                <a href = ./detallepelicula.html?id=$recomedaciones[i].id}>
                <img id = "spiderm" src = "https://image.tmdb.org/t/p/w500/${recomendaciones[i].poster_path}" alt = "${recomendaciones[i].title}">

                ${recomendaciones[i].name} </a> </li>`;

            }

            recomendaciomesDisplay.innerHTML = lista;

            return data;


    
        })
})
            .catch(function (error) {
                console.log(error);
                return error;
            })