let btnBuscar = document.getElementById('buscar');
let cajaDom = document.getElementById('caja');


btnBuscar.addEventListener('click', () => {

    let nombrePokemon = document.createElement('p');
    nombrePokemon.setAttribute('class', 'nombrePoke')

    let imgPokemon = document.createElement('img');
    imgPokemon.setAttribute('class', 'img-Pokemon')

    cajaDom.innerHTML = ""

    let id = document.getElementById('nombre').value;

    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', `https://pokeapi.co/api/v2/pokemon/${id}`);
    xhttp.send();
    
    xhttp.onreadystatechange = function() {

        if(this.readyState == 4 && this.status == 200) {

            let infoPokemon = JSON.parse(this.responseText);
            
            imgPokemon.setAttribute('src', infoPokemon.sprites.front_default);
            cajaDom.appendChild(imgPokemon);
            
            //Creando el nodo del nombre del Pokemon
            nombreNodo = document.createTextNode(infoPokemon.name);
            nombrePokemon.appendChild(nombreNodo);
            cajaDom.appendChild(nombrePokemon);
        }
    }
});