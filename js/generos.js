/* El ENDPOINT de la API */
let apikey=       `86a6f1e422ad71ec4aa878598f090973`;
let generoserie=  `https://api.themoviedb.org/3/genre/tv/list?api_key=${apikey}`;
let generopelis=  `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`;
/* llamando elementos del HTML*/
let article=  document.querySelector(".pili");
let article2= document.querySelector(".meli");
// genero de pelis 
const pelis = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmE2ZjFlNDIyYWQ3MWVjNGFhODc4NTk4ZjA5MDk3MyIsInN1YiI6IjY1NDkyNWRlNDM0OTRmMDEwMWM5MjY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t4yyIowqCaFkFaqmlsJOTdaP2qRSMUse_RQA9AWFntw'
    }
  };
fetch(generoserie)
.then(function(response) {
    return response.json()
})
.then(function(data){
    for (let index = 0; index < data.genres.length; index++) {   
        article.innerHTML +=`<article class = "article">
        <a href="detalledegenero.html?id=${data.genres[index].id}&name=${data.genres[index].name}" class = "a">${data.genres[index].name}</a>
    </article>`     
    }
    console.log(data.genres) 
})
.catch(err => console.error(err)); //la flecha esta porque usamos de ejemplo the movie 
// genero de series 
const series = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmE2ZjFlNDIyYWQ3MWVjNGFhODc4NTk4ZjA5MDk3MyIsInN1YiI6IjY1NDkyNWRlNDM0OTRmMDEwMWM5MjY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t4yyIowqCaFkFaqmlsJOTdaP2qRSMUse_RQA9AWFntw'
    }
  };
fetch(generopelis)
.then(function(response) {
    return response.json()
})
.then(function(data){
    for (let index = 0; index < data.genres.length; index++) {   
        article2.innerHTML +=`<article class = "article">
        <a href="detalledegenero.html?id=${data.genres[index].id}&name=${data.genres[index].name}" class = "a">${data.genres[index].name}</a>
    </article>`     
    } 
})
.catch(err => console.error(err)); //la flecha esta porque usamos de ejemplo the movie 
  
