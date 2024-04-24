// ACA EL JUEGO SELECCIONA UN NUMERO AL AZAR PARA QUE ADIVINES
let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0


// ESTA ACCION SE VA A EJECUTAR CUANDO SE TOQUE EL BOTON CHEQUEAR
function chequearResultado(){
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'por favor introduce un numero valido entre 1 y 100'
        return
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = 'Felicitaciones !!! Adivinaste el numero'
        mensaje.style.color = 'green';
        mensaje.disabled = true;

    }else if (numeroIngresado < numeroAzar){
        mensaje.textContent = '¡Mas Alto! El numero es mayor al que pusiste';
        mensaje.style.color = 'brown';
    }else {
        mensaje.textContent = '¡Mas Bajo! El numero tiene que ser mas bajo del que pusiste'
        mensaje.style.color = 'brown' 
    }
}
