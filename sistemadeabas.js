let botoes = document.querySelectorAll(".tab-btn");
let conteudos = document.querySelectorAll(".tab-content")

botoes.forEach(botao => {

botao.addEventListener("click", () => {
conteudos.forEach(conteudo => {
conteudo.classList.remove("mostrar");
});
 botoes.forEach(btn => {
btn.classList.remove("ativo");
});
 botao.classList.add("ativo");
let alvo = botao.dataset.target;
document.getElementById(alvo).classList.add("mostrar");

    });

});