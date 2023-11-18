/* El ENDPOINT de la API */
let apikey= `86a6f1e422ad71ec4aa878598f090973`;

let qs = location.search; // llega en string
let qsObj = new URLSearchParams(qs); // convertirlo a objeto literal
let id_serie = qsObj.get("id"); 

// recuperar elementos del dom
let contenedor2 = document.querySelector("#container2");


fetch(`https://api.themoviedb.org/3/tv/${id_serie}?api_key=${apikey}`)

.then(function (res) {
    return res.json();
})
.then(function (data) {

    console.log(data);
    let generos = "";
    for (let index = 0; index < data.genres.length; index++) {
      generos += `<a href="./detalledegenero.html?id=${data.genres[index].id}" class = "link">${data.genres[index].name}</a>`
      
        
    }
    contenedor2.innerHTML +=  `             
    <article>
        <h1 id = "titulo">${data.original_name}</h1>
        <img id = "rick" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="rick">                    
        <p class = "parrafo" id = "sub">Fecha de estreno: <p>
        <p class = "parrafo" id = "izq"> ${data.first_air_date}</p>
        <p class = "parrafo" id = "sub">Calificación: </p>
        <p class = "parrafo" id = "izq"> ${data.popularity}</p>
        <p class = "parrafo" id = "sub">Género: </p>
        <p  class = "parrafo" id = "izq" class = "genero">
        ${generos}
        </p>

        <p class = "parrafo" id = "sub"> Sinopsis: </p>
        <p class = "parrafo mediaseries" id = "izq">${data.overview}</h3>
    </article>`;

    return data;
})
.catch(function (error) {
    console.log(error);
    return error;
})

// Ver recomendaciones
let verRecomendaciones = document.querySelector('.Recomendacion2')
let recomendacionesDisplay = document.querySelector('#container2')
verRecomendaciones.addEventListener('click',function(){
    let url =  `https://api.themoviedb.org/3/tv/${id_serie}/recommendations?api_key=${apikey}`;
    console.log(url);
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            recomendacionesDisplay.style.display = 'block';

            let recomendaciones = data.results;
            let lista = document.querySelector(".vacio2");
            
            for (let i = 0; i < 5; i++){
                lista.innerHTML += `<a href = "./detalleeserie.html?id=$recomedaciones[i].id}">
                <img class="recomendaciones" src="https://image.tmdb.org/t/p/w500/${recomendaciones[i].poster_path}" 
                alt = "${recomendaciones[i].title}">`;

            }

            recomendacionesDisplay.innerHTML = lista;

            return data;


    
        })
        .catch(function (error) {
            console.log(error);
            return error;
        })
        })
        
       
            