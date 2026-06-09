function contarVogais(frase){
    let vogais= "aeiouAEIOU"
    let contador= 0

for(let i=0; i < frase.length; i++){
    let letra = frase[i];
    if (vogais.includes(letra)){
        contador++
    }
}

return contador}

let minhaFrase = "O rato roeu a roupa do rei de Roma"
let resultado = contarVogais(minhaFrase);

console.log(" O número total de vogais é " +  resultado)