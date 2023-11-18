// abro el cargador EXTENSION
let page = 1;
let cargador = document.querySelector(".cargador");
cargador.style.display = "block";

// AGREGADO PARA LA CONSIGNA
let apikey = `86a6f1e422ad71ec4aa878598f090973`;
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let buscador = qsObj.get(`busqueda`);
let busqueda = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${buscador}`;
let bus = document.querySelector(".sectionbusqueda");
let noE = document.querySelector(".noexisteosi");
let cuerpo = document.querySelector(".sectionmain2");

// AGREGADO PARA LA CONSIGNA: Muestra el cargador antes de realizar la búsqueda
cargador.style.display = "block";

fetch(busqueda)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // AGREGADO PARA LA CONSIGNA: Oculta el cargador después de obtener los resultados
        cargador.style.display = "none";

        let resultadosbusqueda = data.results;
        let resultados = "";
        let totalresults = data.total_results;
        if (totalresults == 0) {
            noE.innerHTML = `<p class="noexiste"> No hay resultados para: ${buscador} </p>`;
        } else {
            bus.innerHTML += `<h1 id="resultadosdelabusqueda"> Resultados de su búsqueda: "${buscador}"`;
            for (let index = 0; index < resultadosbusqueda.length; index++) {
                if (resultadosbusqueda.original_title != null || resultadosbusqueda[index].poster_path != null) {
                    resultados += `<article class="listadeseries">
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
            bus.innerHTML += resultados;
        }
        return data;
    })
    // AGREGADO PARA LA CONSIGNA: Oculta el cargador en caso de error
    .catch(function (error) {
        cargador.style.display = "none";
        console.log(error);
        return error;
    });