let taxasConversao = {
    USD: 0.19,  
    EUR: 0.17,  
    GBP: 0.14   
};
let formatosMoeda = {
    USD: { local: 'en-US', estilo: 'USD' },
    EUR: { local: 'de-DE', estilo: 'EUR' },
    GBP: { local: 'en-GB', estilo: 'GBP' }
};
let btnConverter = document.getElementById('btnConverter');
let inputBrl = document.getElementById('valorBrl');
let selectMoeda = document.getElementById('moedaDestino');
let divResultado = document.getElementById('resultadoVal');
btnConverter.addEventListener('click', () => {
    let valorOriginal = parseFloat(inputBrl.value);
    let moedaSelecionada = selectMoeda.value;
    if (isNaN(valorOriginal) || valorOriginal <= 0) {
        alert('Por favor, insira um valor válido maior que zero.');
        return;
    }
    let taxa = taxasConversao[moedaSelecionada];
    let valorConvertido = valorOriginal * taxa;
    let config = formatosMoeda[moedaSelecionada];
    let resultadoFormatado = new Intl.NumberFormat(config.local, {
        style: 'currency',
        currency: config.estilo
    }).format(valorConvertido);
    divResultado.textContent = resultadoFormatado;
});
