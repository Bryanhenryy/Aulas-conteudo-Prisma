 const form = document.querySelector(".form-login");
 
 const usuario = document.querySelector("#usuario");

 const senha = document.querySelector("#senha");

form.addEventListener("submit", logar);

function logar(event){
    event.preventDefault();

    if (usuario.value === "" || senha.value === "") {
     
    alert("Os campos não podem estar vazios");
   
    } else if (usuario.value !== "bryan" && senha.value !== "0922") {
    
    window.location.href = "usuario.html";   

    } else {
    alert("Usuário ou senha inválidos"); 
    } 
}   