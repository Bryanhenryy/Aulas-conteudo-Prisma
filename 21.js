function contarVogais(frase){
    let vogais= "aeiouAEIOU"
    let contador= 0

    for(let char of frase) {
       if(vogais.includes(char)){
        contador ++
       }
    }
    return contador
}
let frase= "Bom dia"
console.log(contarVogais(frase))