let peso = 62
let altura= 1.70
let imc = peso / (altura * altura)
if(imc < 18.5){
    console.log("Abaixo do peso")
} else if(imc >= 18.5 && imc < 25){
    console.log("Peso normal")
} else {
    console.log("Acima do peso")
}