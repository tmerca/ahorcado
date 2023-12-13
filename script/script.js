function juego() {
  // VARIABLES
  let numClicks = 0;
  let divPalabra = document.getElementById("palabra"); // Palabra en Pantalla
  let divLetrasFalladas = document.getElementById("letras-incorrectas");
  let mensajeFinal = document.getElementById("contenedor-mensaje-final");
  let botones = document.getElementById("botones"); // Div con los botones de las letras
  let palabras = ["ARBOL", "ARMARIO", "CAMPANA", "PALA"];
  let guiones = []; // Palabra aleatoria en "_"
  let letrasFalladas = []; // Letras que falla durante la partida
  let palabraAAdivinar = palabras[Math.floor(Math.random() * palabras.length)]; // Palabra aleatoria del array
  let palabraElegida = palabraAAdivinar;
  let adivinada = true; // Palabra adivinada o no
  let vidas = document.getElementById("intentos");
  let letraNoEncontrada = true; // Para comprobar si está en letrasFalladas[]
  vidas.innerHTML = 7;

  // VARIABLES PARA EL CRONÓMETRO
  let elCrono;
  let miFecha = new Date();
  let laHora = document.getElementById("lahora");

  // Inicializo el tiempo para el cronometro
  miFecha.setHours(0, 0, 0, 0);

  // Inicializo el texto de "lahora"
  laHora.innerHTML = "00:00:00";

  function crono() {
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();

    segundos += 1;

    if (segundos == 60) {
      segundos = 0;
      minutos += 1;

      miFecha.setMinutes(minutos);
    }

    miFecha.setSeconds(segundos);

    if (horas < 10) {
      horas = "0" + horas;
    }
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    if (segundos < 10) {
      segundos = "0" + segundos;
    }

    laHora.innerHTML = horas + ":" + minutos + ":" + segundos;
  }
  function reiniciarCrono() {
    // Inicializo el tiempo para el cronometro
    miFecha.setHours(0, 0, 0, 0);

    // Inicializo el texto de "lahora"
    laHora.innerHTML = "00:00:00";
  }

  function startCrono() {
    elCrono = setInterval(crono, 1000);
  }

  
  function stopCrono() {
    clearInterval(elCrono);
  }
  
  function reset() {
    setTimeout(reiniciarCrono, 1000);
  }
  
  // window.addEventListener("load", start);
  
  // CONSTANTES
  const botonPopup = document.querySelector(".boton-popup");
  const envoltorioPopup = document.querySelector(".envoltorio-popup");
  const cerrarPopup = document.querySelector(".cerrar-popup");
  const divLetra = document.querySelectorAll(
    ".letra:not(.incorrecta, .correcta)"
  );

  crearEspacios();
  cambiarEspacios();
  mostrarPopup();

  function mostrarPopup() {
    botonPopup.addEventListener("click", () => {
      envoltorioPopup.style.display = "block";
    });

    cerrarPopup.addEventListener("click", () => {
      envoltorioPopup.style.display = "none";
    });

    envoltorioPopup.addEventListener("click", () => {
      envoltorioPopup.style.display = "none";
    });
  }

  function crearEspacios() {
    for (let i = 0; i < palabraElegida.length; i++) {
      guiones[i] = "__";
    }
  }

  function cambiarEspacios() {
    for (let i = 0; i < palabraElegida.length; i++) {
      divPalabra.innerHTML = divPalabra.innerHTML + " " + guiones[i];
    }
  }

  function comprobarLetra(letra) {
    for (let i = 0; i < palabraElegida.length; i++) {
      if (letra == palabraElegida.charAt(i)) {
        guiones[i] = letra.toUpperCase();
        letraNoEncontrada = false;
      }
    }
    if (letraNoEncontrada == true) {
      letrasFalladas[letrasFalladas.length] = " " + letra;
      vidas.innerHTML = vidas.innerHTML - 1;
    }

    divPalabra.innerHTML = "";
    divLetrasFalladas.innerHTML = letrasFalladas;
    cambiarEspacios();
    compruebaAcierto();
    letraNoEncontrada = true;
    adivinada = true;
  }

  function compruebaAcierto() {
    for (let i = 0; i < palabraElegida.length; i++) {
      if (guiones[i].toUpperCase() != palabraElegida.charAt(i)) {
        adivinada = false;
      }
    }
    if (adivinada == true && vidas.innerHTML > 0) {
      numClicks = 0;
      stopCrono();      
      mensajeFinal.innerHTML = "FELICIDADES, HAS GANADO!";
      mensajeFinal.style.display = "block";
      botones.style.display = "none";
    }
    if (vidas.innerHTML == 0) {
      stopCrono();      
      botones.style.display = "none";
      mensajeFinal.innerHTML =
        "HAS PERDIDO! LA PALABRA ERA: <br>" + palabraAAdivinar;
      mensajeFinal.style.display = "block";
    }
  }

  botones.addEventListener(
    "click",
    (e) => {
      numClicks+= 1;
      if(numClicks == 1){
        startCrono();
      }
      if (e.target.value != null) {
        e.target.style.display = "none";
        comprobarLetra(e.target.value);
      }
    },
    false
  );
}

juego();
