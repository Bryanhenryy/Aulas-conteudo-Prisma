let preco= 450
let precoFinal

if(preco > 500){
    precoFinal = preco - (preco * 0.15)
}else if(preco > 200){
    precoFinal= preco - (preco * 0.1)
}else{
    precoFinal= preco
}
console.log(precoFinal)