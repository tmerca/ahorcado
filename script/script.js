// ARRAY CON PALABRAS/LETRAS
let palabras = ['PLAYA','SATURNO','GRIETA','ABISMO','LAMENTO'];
let palabraAAdivinar = palabras[Math.floor(Math.random() * palabras.length)];

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
escribirGuiones();
compruebaLetra(palabraAAdivinar);
mostrarPopup();

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
    let guiones = "";

    for(i = 1; i <= palabraAAdivinar.length; i++){
        guiones += "_ ";
    }
    divPalabra.textContent = guiones;
}

// FUNCION QUE COMPRUEBA QUE LA LETRA PULSADA POR EL CLIENTE ESTÉ EN LA PALABRA A ADIVINAR
function compruebaLetra(palabra) {

    // Evento para que nos capture la letra pulsada y bucle for para ir comparando letra por letra con la palabra
    divBotones.addEventListener('click', (e) => {
    
        for(i = 0; i < palabra.length; i++) {
            // Hacemos que si coincide añada la clase correspondiente
            if(e.target.value == palabra[i]) {
                console.log(e.target.value + " en la posición " + (i + 1));
                e.target.style= "display: none;";
                letrasCorrectas.innerHTML = letrasCorrectas.innerHTML + " " + e.target.value;
            } 
            if(!e.target.value == palabra[i]){
                e.target.style= "display: none;";
                letrasIncorrectas.innerHTML = letrasIncorrectas.innerHTML + " " + e.target.value;
            }
        }

    });

}