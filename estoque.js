let estoqueAtual = 100
let vendasDia = 35
let produtosPorCaixa = 12
estoqueAtual -= vendasDia
estoqueAtual += 10
estoqueExtra = estoqueAtual % produtosPorCaixa
console.log(estoqueAtual)
console.log(estoqueExtra)

