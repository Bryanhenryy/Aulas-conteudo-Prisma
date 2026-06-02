function bhaskara(a, b, c) {
    let delta = b * b - 4 * a * c;
    if (delta > 0){
        let x1 = -b + Math.sqrt(delta) / (2 * a);
        let x2 = -b - Math.sqrt(delta) / (2 * a);
        return [x1, x2];
    } else if (delta === 0){
        let x = -b / (2 * a);
        return [x];
    } else {
        return [];
    }
}

let resultado = bhaskara(3, 15, -18); 
console.log(resultado);