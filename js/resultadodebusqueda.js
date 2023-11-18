// abro el cargador EXTENSION
let page= 1;
let cargador= document.querySelector(".cargador");
cargador.style.display= "block";
/* El ENDPOINT de la API */
let apikey= `86a6f1e422ad71ec4aa878598f090973`;
//conecto a la barra de busqueda
let qs =            location.search; 
let qsObj =         new URLSearchParams(qs);
let buscador =      qsObj.get(`busqueda`);
let busqueda =      `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${buscador}`;
/* llamando elementos del HTML*/
let bus =       document.querySelector(".sectionbusqueda");
let noE=        document.querySelector(".noexisteosi");
let cuerpo=     document.querySelector(".sectionmain2")
cargador.innerHTML = '<p>Buscando...</p>'; // Agregamos el mensaje "Buscando..."
fetch(busqueda)
.then(function (response){
    return response.json();
})
.then(function (data){
    cargador.style.display = "none"; // ocultamos el cargador
    let resultadosbusqueda = data.results;
    let resultados = "";
    let totalresults= data.total_results;
    if (totalresults == 0){
        noE.innerHTML= `<p class="noexiste"> No hay resultados para: ${buscador} </p>`;
    }
    else{
        bus.innerHTML+= `<h1 id="resultadosdelabusqueda"> Resultados de su búsqueda: "${buscador}"`;
       for (let index = 0; index < resultadosbusqueda.length; index++){
            if(resultadosbusqueda.original_title != null || resultadosbusqueda[index].poster_path != null){
                resultados+= `<article class="listadeseries">
                <a class="linkdeseries tamaño" href="./detallepelicula.html?id=${resultadosbusqueda[index].id}"> <img class="portadas"
                    src="https://image.tmdb.org/t/p/w500/${resultadosbusqueda[index].poster_path}"></a> </li>
                <ul class="listadedatos">
                <li class="tituloestreno">
                    <p class="tituloestreno nombre"> ${resultadosbusqueda[index].title} </p>
                </li>
                <li class="tituloestreno">
                    <p class="tituloestreno"> Fecha de estreno: ${resultadosbusqueda[index].release_date}</p>
                </li>
                </ul>
                </article>`; 
                }
            } 
        bus.innerHTML += resultados ;
        }
    return data;
})
    
.catch(function (error) {
    console.log(error);
    return error;
});