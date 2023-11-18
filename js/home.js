/* El ENDPOINT de la API */
let apikey=     `86a6f1e422ad71ec4aa878598f090973`;
let pelis=      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;
let series=     `https://api.themoviedb.org/3/tv/airing_today?api_key=${apikey}`;
let seriespop=  `https://api.themoviedb.org/3/tv/popular?api_key=${apikey}`;
let genero=     `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`; 
/* llamando elementos del HTML*/
let section=    document.querySelector(".sectionmain");
let section2=   document.querySelector(".section-main");
let section3=   document.querySelector(".sectionmain3");
//home 
//api de pelis
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmE2ZjFlNDIyYWQ3MWVjNGFhODc4NTk4ZjA5MDk3MyIsInN1YiI6IjY1NDkyNWRlNDM0OTRmMDEwMWM5MjY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t4yyIowqCaFkFaqmlsJOTdaP2qRSMUse_RQA9AWFntw'
    }
  };
fetch(pelis)
.then(function(response){
     return response.json()
  })
.then(function(data){
    for (let index = 0; index < 5; index++) {
        section.innerHTML += `<article class="listadeseries">
        <a class="linkdeseries tamaño" href="./detallepelicula.html?id=${data.results[index].id}"> <img class="portadas"
                src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}"></a> </li>
        <ul class="listadedatos">
            <li class="tituloestreno">
                <p class="tituloestreno nombre"> ${data.results[index].title} </p>
            </li>
            <li class="tituloestreno">
                <p class="tituloestreno"> Fecha de estreno: ${data.results[index].release_date}</p>
            </li>
        </ul>
    </article>` 
}})
.catch(err => console.error(err)); //la flecha esta porque usamos de ejemplo the movie 
// api de series 
fetch(series)
.then(function(response){
     return response.json()
  })
.then(function(data){
    for (let index = 0; index < 5; index++) {
        section2.innerHTML += `<article class="listadeseries">
        <a class="linkdeseries tamaño" href="./detalleserie.html?id=${data.results[index].id}"> <img class="portadas"
                src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}"></a> </li>
        <ul class="listadedatos">
            <li class="tituloestreno">
                <p class="tituloestreno nombre"> ${data.results[index].original_name} </p>
            </li>
            <li class="tituloestreno">
                <p class="tituloestreno"> Fecha de estreno: ${data.results[index].first_air_date}</p>
            </li>
        </ul>
    </article>` 
}})
.catch(err => console.error(err)); //la flecha esta porque usamos de ejemplo the movie 
// api de series populares 
fetch(seriespop)
.then(function(response){
     return response.json()
  })
.then(function(data){
    for (let index = 0; index < 5; index++) {
        section3.innerHTML += `<article class="listadeseries">
        <a class="linkdeseries tamaño" href="./detalleserie.html?id=${data.results[index].id}"> <img class="portadas"
                src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}"></a> </li>
        <ul class="listadedatos">
            <li class="tituloestreno">
                <p class="tituloestreno nombre"> ${data.results[index].name} </p>
            </li>
            <li class="tituloestreno">
                <p class="tituloestreno"> Fecha de estreno: ${data.results[index].first_air_date}</p>
            </li>
        </ul>
    </article>` 
}})
.catch(err => console.error(err)); //la flecha esta porque usamos de ejemplo the movie 

