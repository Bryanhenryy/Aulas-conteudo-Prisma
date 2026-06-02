let = ladoA = 3
let = ladoB = 5
let = ladoC = 4
if (ladoA === ladoB && ladoB === ladoC){
    console.log("O triângulo é equilátero")
}
 else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
    console.log("O triângulo é isósceles")
 }
 else {
    console.log("O triângulo é escaleno")
 }