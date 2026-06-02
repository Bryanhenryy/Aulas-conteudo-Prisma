let senhaCorreta = "1234";
let tentativa = "";
let numero = 1
while ( tentativa!== senhaCorreta && numero <= 4){

    tentativa += numero
    console.log("Tentativa atual:", tentativa)

    if (tentativa!== senhaCorreta){
        console.log("Senha incorreta,tente novamente.")
    }
    numero++
}
if (tentativa===senhaCorreta){
    console.log("Acesso permitido")
} else{
    console.log("Acesso negado")
}