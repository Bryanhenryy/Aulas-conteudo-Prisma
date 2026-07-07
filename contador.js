let timer = document.getElementById("timer")
let iniciar = document.getElementById("start")
let parar = document.getElementById("stop")

let timeleft = 10
let timerId = null;

let atualizarTempo = () => {
    
    timer.textContent = timeleft; 

    if (timeleft > 0) {
        timeleft--;
    } else {
        clearInterval(timerId);
        timerId = null;
        alert("O tempo acabou!");
    }
}

iniciar.addEventListener("click",() => {
    if(timerId === null){
        timerId = setInterval(atualizarTempo,1000);
    }
})
parar.addEventListener("click",() => {
    clearInterval(timerId)
    timerId = null 
}
)

