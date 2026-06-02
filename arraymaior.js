let numeros = [200, 67, 13, 44, 164]
let maior= 0

for(let index = 0; index < numeros.length; index++){
    if(numeros[index] > maior){
        maior = numeros[index]
    }
}
console.log(maior)