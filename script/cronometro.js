let elCrono;
let miFecha = new Date();
let laHora = document.getElementById("lahora");

// Inicializo el tiempo para el cronometro
miFecha.setHours(0,0,10,0);

// Inicializo el texto de "lahora"
laHora.innerHTML = "00:00:10";

let vidas = document.getElementById('intentos');

function crono(){
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();

    segundos -= 1;

    // Funcion para que cuando llegue a 00:00:00 no resetee el temporizador 
    if(laHora.innerHTML == "00:00:00"){    
      vidas.innerHTML = vidas.innerHTML - 1;
      
      reset();
    }

    if(vidas.innerHTML == 0){
      stop();
    }

    if(segundos == 60){
        segundos = 0;
        minutos += 1;

    elCrono = setInterval(crono,1000);
        miFecha.setMinutes(minutos);
    }

    miFecha.setSeconds(segundos);

    if(horas < 10) {horas = "0" + horas};
    if(minutos < 10) {minutos = "0" + minutos};
    if(segundos < 10) {segundos = "0" + segundos};

    laHora.innerHTML = horas + ":" + minutos + ":" + segundos;

}

function reiniciarCrono(){
   // Inicializo el tiempo para el cronometro
   miFecha.setHours(0,0,10,0);

   // Inicializo el texto de "lahora"
   laHora.innerHTML = "00:00:10";
}

function start(){
  elCrono = setInterval(crono,1000);
}


window.addEventListener('load', start);

function stop(){
    clearInterval(elCrono);
}

function reset(){
    setTimeout(reiniciarCrono,0);
}