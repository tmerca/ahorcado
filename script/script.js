// ARRAY CON PALABRAS/LETRAS
let palabras = ['SATURNO','GRIETA','ABISMO','LAMENTO'];
let palabraAAdivinar = palabras[Math.floor(Math.random() * palabras.length)];
let guiones = [];

// CAPTURANDO ELEMENTOS CON EL DOM
const divBotones = document.getElementById('botones');
const divLetra = document.querySelectorAll('.letra:not(.incorrecta, .correcta)');
const divPalabra = document.getElementById('palabra');
const botonPopup = document.querySelector('.boton-popup');
const envoltorioPopup = document.querySelector('.envoltorio-popup');
const cerrarPopup = document.querySelector('.cerrar-popup');
const letrasCorrectas = document.getElementById('correctas');
const letrasIncorrectas = document.getElementById('incorrectas');


//LLAMADAS A FUNCIONES 
elegirTematica();
escribirGuiones();
compruebaLetra(palabraAAdivinar);
mostrarPopup();

let respuesta = prompt('Temáticas para jugar: 1 -> Deportes, 2 -> Animales, 3 -> Frutas');

function elegirTematica(respuesta){

    

}

function mostrarPopup() {

    botonPopup.addEventListener('click', () =>{
        envoltorioPopup.style.display = 'block';
    });

    cerrarPopup.addEventListener('click', () =>{
        envoltorioPopup.style.display = 'none';
    });

    envoltorioPopup.addEventListener('click', () => {
        envoltorioPopup.style.display = 'none';
    });

}


// FUNCION QUE NOS ESCRIBE TANTOS GUIONES COMO LETRAS TIENE LA PALABRA A ADIVINAR
function escribirGuiones(){

    for(i = 0; i < palabraAAdivinar.length; i++){
        guiones[i] = "_ ";
    }
    divPalabra.textContent = guiones.join('');
}

// FUNCION QUE COMPRUEBA QUE LA LETRA PULSADA POR EL CLIENTE ESTÉ EN LA PALABRA A ADIVINAR
function compruebaLetra(palabra) {

    // Evento para que nos capture la letra pulsada y bucle for para ir comparando letra por letra con la palabra
    divBotones.addEventListener('click', (e) => {
    
        for(i = 0; i < palabra.length; i++) {
            // Hacemos que si coincide añada la clase correspondiente
            if(e.target.value == palabra[i]) {
                console.log(e.target.value + " en la posición " + (i + 1));
                e.target.classList.add("correcta");

                // letrasCorrectas.innerHTML = letrasCorrectas.innerHTML + " " + e.target.value;
            }
        }
    });

}