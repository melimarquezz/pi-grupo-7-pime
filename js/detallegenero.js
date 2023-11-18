const apiKey = '86a6f1e422ad71ec4aa878598f090973';
let qs = location.search; // llega en string
let qsObj = new URLSearchParams(qs); // convertirlo a objeto literal
let name = qsObj.get("name");
let idgenero=qsObj.get('id')

let peliUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${idgenero}`;
let serieUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${idgenero}`;

if (idgenero!=null) {
        // feth para pelis
        fetch(peliUrl)
        .then(function(res){
            return res.json();
        })
    
        .then(function(data){
            let DetalleDeGenero = data.results;
            console.log(DetalleDeGenero);

            //A modificar
            //let roro= document.querySelector('.h1'); // no nos deja agregar mas variables 
           // let porfavor= document.querySelector(".h1");
            let titulo = document.querySelector(".seriesdg"); 
            titulo.innerHTML = `<h1 id="h1">${title}</h1>`;
            let GenreDetail = "";
            for (let i = 0; i < DetalleDeGenero.length; i++){
                if (DetalleDeGenero[i].poster_path != null) {
                GenreDetail  += `<article class="listadeseries">
                    <a class="linkdeseries tamaño" href="./detallepelicula.html?id=${DetalleDeGenero[i].id}"> 
                    <img class="portadas" src="https://image.tmdb.org/t/p/w500/${DetalleDeGenero[i].poster_path}"></a> </li>
                    <ul class="listadedatos">
                        <li class="tituloestreno">
                            <p class="tituloestreno nombre"> ${DetalleDeGenero[i].title}</p>
                        </li>
                        <li class="tituloestreno">
                            <p class="tituloestreno"> Fecha de estreno: 30 de Abril de 1990</p>
                        </li>
                    </ul>
                </article>`
                }
            };

        })
        .catch(function (error) {
            console.log(error);
            return error;
        })
}


if (idgenero!=null) {
    // Fetch de series 

fetch(serieUrl)
.then(function(res){
    return res.json();
})

.then(function(data){
    let DetalleDeGenero = data.results;
    console.log(DetalleDeGenero);

    //A modificar
    let titulo = document.querySelector('.h1')
    titulo.innerHTML = `<h1 id="h1">${name}</h1>`

    let GenreDetail = "";

    console.log(data);
    for (let i = 0; i < DetalleDeGenero.length; i++){
        if (DetalleDeGenero[i].poster_path!=null) {
        GenreDetail  += `  <section class="sectionmain peliculasdg">
        <article class="listadeseries">
            <a class="linkdeseries tamaño" href="./detallepelicula.html?id=${DetalleDeGenero[i].idgenero}"> 
            <img class="portadas" src="https://image.tmdb.org/t/p/w500/${DetalleDeGenero[i].poster_path}"></a> </li>
            <ul class="listadedatos">
                <li class="tituloestreno">
                    <p class="tituloestreno nombre"> ${DetalleDeGenero[i].title}</p>
                </li>
                <li class="tituloestreno">
                    <p class="tituloestreno"> Fecha de estreno: 30 de Abril de 1990</p>
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