// ARRAY CON PALABRAS

let palabras = ['PLAYA','SATURNO','GRIETA','ABISMO','LAMENTO'];
let guiones = []; // Array para los guiones que vamos a escribir dependiendo de la longitud de la palabra
let palabraAAdivinar = palabras[Math.floor(Math.random() * palabras.length)];

// CAPTURANDO ELEMENTOS CON EL DOM
let botones = document.getElementById('botones');
const letra = document.querySelectorAll('.letra:not(.incorrecta, .correcta)');

escribirGuiones(palabraAAdivinar);
compruebaLetra(palabraAAdivinar);

function escribirGuiones(palabra){
    

}

function compruebaLetra(palabra) {


    botones.addEventListener('click', (e) => {

        let arrPalabra = [...palabra];
    
        for(i = 0; i < arrPalabra.length; i++) {
            if(e.target.value == arrPalabra[i]) {
                console.log('La letra: ' + e.target.value + ' está en la palabra');
            }
        }
    });

}

