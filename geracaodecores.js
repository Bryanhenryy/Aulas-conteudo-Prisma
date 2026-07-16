let container = document.getElementById('main-container');
let colorText = document.getElementById('color-text');
let generateBtn = document.getElementById('generate-btn');
function gerarCorAleatoria() {
    const caracteres = '0123456789ABCDEF';
    let corHex = '#';
    for (let i = 0; i < 6; i++) {
        corHex += caracteres[Math.floor(Math.random() * 16)];
    }   
    return corHex;
}
generateBtn.addEventListener('click', function() {
    const novaCor = gerarCorAleatoria();

container.style.backgroundColor = novaCor;
colorText.textContent = novaCor;
colorText.style.color = novaCor;
});