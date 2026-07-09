let tempoDecorrido = 0; 
let intervaloId = null; 


const displayCronometro = document.getElementById('cronometro');
const btnIniciar = document.getElementById("iniciar");
const btnParar = document.getElementById('parar');
const btnZerar = document.getElementById('zerar');


function formatarTempo(ms) {
    const totalSegundos = Math.floor(ms / 1000);
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    
    const formatoHoras = String(horas).padStart(2, '0');
    const formatoMinutos = String(minutos).padStart(2, '0');
    const formatoSegundos = String(segundos).padStart(2, '0');

    return `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
}

function iniciarCronometro() {
    
    if (intervaloId) return; 

    intervaloId = setInterval(() => {
        tempoDecorrido += 1000; 
        displayCronometro.textContent = formatarTempo(tempoDecorrido);
    }, 1000);
}

function pararCronometro() {
    clearInterval(intervaloId);
    intervaloId = null;
}

function zerarCronometro() {
    pararCronometro();
    tempoDecorrido = 0;
    displayCronometro.textContent = '00:00:00';
}


iniciar.addEventListener('click', iniciarCronometro);
parar.addEventListener('click', pararCronometro);
zerar.addEventListener('click', zerarCronometro);