let inputNumero = document.getElementById("input-numero")
let inputNome = document.getElementById("input-nome")
let inputValidade = document.getElementById("input-validade")

let visualNumero = document.getElementById("visual-numero")
let visualNome = document.getElementById("visual-nome")
let visualValidade = document.getElementById("visual-validade")

inputNumero.addEventListener("input", (e) => {
let valor = e.target.value.replace(/\D/g, '');
valor = valor.substring(0, 16);

let formatado = "";
for(let i = 0; i < valor.length; i++){
    if(i > 0 && i % 4 === 0) {
        formatado += " ";
    }
    formatado += valor[i];
}
e.target.value = formatado;
visualNumero.innerText = formatado.padEnd(19, "#");
});

inputNome.addEventListener("input", (e) =>{
    let valor = e.target.value.toUpperCase();
    e.target.value = valor;
    visualNome.innerText = valor || "NOME DO TITULAR";
})

inputValidade.addEventListener("input", (e) => {
    let valor = e.target.value.replace(/\D/g, '');
    valor = valor.substring(0, 4);

    if(valor.length >= 3) {
        e.target.value = valor.substring(0, 2) + "/" + valor.substring(2);
    }else {
        e.target.value = valor
    }
    visualValidade.innerText = e.target.value || 'MM/AA';
});