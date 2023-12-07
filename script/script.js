function juego() {

    let divPalabra = document.getElementById('palabra'); // Palabra en Pantalla
    let divLetrasFalladas = document.getElementById('letras-incorrectas');
    let mensajeFinal = document.getElementById('contenedor-mensaje-final');
    let botones = document.getElementById('botones'); // Div con los botones de las letras
    let palabras = ['ARBOL', 'ARMARIO', 'CAMPANA', 'PALA'];
    let guiones = []; // Palabra aleatoria en "_"
    let letrasFalladas = []; // Letras que falla durante la partida
    let palabraAAdivinar = palabras[Math.floor(Math.random() * palabras.length)]; // Palabra aleatoria del array
    let palabraElegida = palabraAAdivinar;
    let adivinada = true; // Palabra adivinada o no
    let vidas = document.getElementById('intentos');
    vidas.innerHTML = 7;
    let letraNoEncontrada = true; // Para comprobar si está en letrasFalladas[]

    // POP-UP
    const botonPopup = document.querySelector('.boton-popup');
    const envoltorioPopup = document.querySelector('.envoltorio-popup');
    const cerrarPopup = document.querySelector('.cerrar-popup');

    const divLetra = document.querySelectorAll('.letra:not(.incorrecta, .correcta)');

    crearEspacios();
    cambiarEspacios();
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

    function crearEspacios(){
        for(let i = 0; i < palabraElegida.length; i++){
            guiones[i] = "__";
        }
    }
    
    function cambiarEspacios(){
        for(let i = 0; i < palabraElegida.length; i++){
            divPalabra.innerHTML = divPalabra.innerHTML  + " " + guiones[i];
        }
    }
    
    function comprobarLetra(letra){
        
        for(let i = 0; i < palabraElegida.length; i++) {
            
            if(letra == palabraElegida.charAt(i)){
                guiones[i] = letra.toUpperCase();
                letraNoEncontrada = false;
            }
        }
        if(letraNoEncontrada == true){
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
        for(let i = 0; i < palabraElegida.length; i++) {
            
            if(guiones[i].toUpperCase() != palabraElegida.charAt(i)){
                adivinada = false;
            }
        }
        if((adivinada == true) && (vidas.innerHTML > 0)){
            mensajeFinal.innerHTML = "FELICIDADES, HAS GANADO!"
            mensajeFinal.style.display = "block";
            botones.style.display = "none";
        }
        if(vidas.innerHTML == 0){
            botones.style.display = "none";
            mensajeFinal.innerHTML = "HAS PERDIDO! LA PALABRA ERA: <br>" + palabraAAdivinar;
            mensajeFinal.style.display = "block";
        }
    }
    
    botones.addEventListener('click', (e) =>  {
        if(e.target.value != null){
            e.target.style.display = "none";
            comprobarLetra(e.target.value);
        }
    }, false)
    
}

juego();