const palabra = "MAZMORRA";
const letra = document.querySelectorAll('.letra:not(.incorrecta, .correcta)');

escribirGuiones(palabra);
adivinarLetra(palabra);

function escribirGuiones(palabra){
    
    let guiones = palabra.length;
    let palabraAAdivinar = "";

    for(i = 1; i <= guiones; i++){
        palabraAAdivinar += "_ ";
    }

    document.getElementById('palabra').innerText = palabraAAdivinar;

}

function adivinarLetra(palabra) {

    let arrPalabra = [...palabra];

    console.log(arrPalabra);    
}
