let keyElemento = document.getElementById("key")
let codeElemento = document.getElementById("code")
let keyCodeElemento = document.getElementById("keyCode")

window.addEventListener("keydown", (event) =>{
    keyElemento.textContent = event.key === " "  ? "Espaço" : event.key;
    codeElemento.textContent = event.code
    keyCodeElemento.textContent = event.keyCode
})