let todoFormulario = document.getElementById("formulario");
let todoEscrever = document.getElementById ("escrever");
let todoLista = document.getElementById("todolist")

todoFormulario.addEventListener("submit", function(event){
    event.preventDefault()
    let textoTarefa = todoEscrever.value.trim();

    if(textoTarefa !== ''){
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = textoTarefa

        novaTarefa.addEventListener("click",function(){
            novaTarefa.classList.toggle("concluido");
        });

        todoLista.appendChild(novaTarefa)
        todoEscrever.value = '';
        todoEscrever.focus()
    }
})  ;