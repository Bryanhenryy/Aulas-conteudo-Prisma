function primo(numero) {
    if (numero <= 1) {
        return false;
    }
     
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    
    return true;
}

console.log(primo(19)); 
console.log(primo(4));  