function primo(numero){
    if (numero < 2) {
        return false;
    }
}    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    
    return true;

    console.log(primo(2))
    console.log(primo(4))
    console.log(primo(9))
    console.log(primo(29))