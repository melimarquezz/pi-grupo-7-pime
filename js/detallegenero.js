const apiKey = '86a6f1e422ad71ec4aa878598f090973';
let qs = location.search; // llega en string
let qsObj = new URLSearchParams(qs); // convertirlo a objeto literal
let id_pelicula = qsObj.get("id"); 
let namee = qsObj.get("name");
let lista = document.querySelector('')

let peliUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=${idGenero}`
let serieUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${ApiKey}&with_genres=${idGenero}`

//function buscarPorGenero() {
    
    // Obtener el valor seleccionado en el menú desplegable
    //const Discover = document.getElementById('genero').value;

    // Construir la URL de la API de TMDb con el endpoint "Discover"
    //const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${Discover}`;

    // feth para pelis
    fetch(peliUrl)
        .then(function(res){
            return res.json();
        })

        .then(function(data){
            let DetalleDeGenero = data.results;
            console.log(DetalleDeGenero);

            //A modificar
            let titulo = document.querySelector('.h1')
            titulo.innerHTML = `<h1 id="h1">${namee}</h1>`

            let GenreDetail = "";

            console.log(data);
            for (let i = 0; i < DetalleDeGenero.length; i++){
                if (DetalleDeGenero[i].poster_path!=null) {
                GenreDetail  += `<article class="listadeseries">
                <a class="linkdeseries tamaño" href="./detalleserie.html"> <img class="portadas"
                        src="./img/peaky fucking blinders.webp"></a> </li>
                <ul class="listadedatos">
                    <li class="tituloestreno">
                        <p class="tituloestreno nombre"> Peaky Blinders </p>
                    </li>
                    <li class="tituloestreno">
                        <p class="tituloestreno"> Fecha de estreno: 07 de Julio de 2014</p>
                    </li>
                </ul>
            </article>`
                }
            }

        })
        .catch(function (error) {
            console.log(error);
            return error;
        })

    
}

// Fetch de series 