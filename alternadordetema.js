let botao = document.getElementById("button")
let body = document.body;

let DarkMode = localStorage.getItem("dark-mode") === 'true';

if(DarkMode){
    body.classList.add('dark-mode');
}

botao.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
let escuro = body.classList.contains('dark-mode');
localStorage.setItem('dark-mode', escuro); 
});
