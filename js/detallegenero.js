const apiKey = '86a6f1e422ad71ec4aa878598f090973';
let qs = location.search; // llega en string
let qsObj = new URLSearchParams(qs); // convertirlo a objeto literal
let name = qsObj.get("name");
let idgenero=qsObj.get('id');
let namegenero= qsObj.get(`name`);
console.log(namegenero);
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
        //A modificar
        let genero= document.querySelector(".h1");  
        let titulo = document.querySelector(".peliculasdg"); 
        console.log(titulo);
        console.log(DetalleDeGenero.length);
        genero.innerHTML+= `<p class="h1">${namegenero}</p>`; 
        for (let i = 0; i < DetalleDeGenero.length; i++){
            if (DetalleDeGenero[i].poster_path != null) { 
                titulo.innerHTML += `<article class="listadeseries">
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
            </article>`;
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
    let titulo2 = document.querySelector(".seriesdg");
    for (let i = 0; i < DetalleDeGenero.length; i++){
        if (DetalleDeGenero[i].poster_path!=null) {
        titulo2.innerHTML  += ` <article class="listadeseries">
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

