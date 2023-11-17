let apikey= `86a6f1e422ad71ec4aa878598f090973`;

fetch('https://image.tmdb.org/t/p/w500/')
    .then(response => response.json())
    .then(data => {
        // Paso 2: Crear un elemento de imagen
        const imagen = document.createElement('img');

        imagen.src = data.url;
        const footer = document.getElementById('miFooter');
                    footer.appendChild(imagen);
    })
    .catch(error => console.error('Error al obtener la imagen desde la API:', error));