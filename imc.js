function calcularIMC(){
    let peso= parseFloat(document.getElementById("peso").value);
    let altura= parseFloat(document.getElementById("altura").value);
    let resultadoArea = document.getElementById("resultado")

    if   (isNaN(peso) || isNaN(altura) || altura <= 0) {
    resultadoArea.value = "Por favor, preencha os campos corretamente com valores numéricos.";
    return;
    }
    let imc= peso / (altura * altura);
    let classificacao = "";
    
    if (imc < 18.5){
        classificacao = "Abaixo do peso"
    }else if (imc >= 18.5 && imc < 30
        classificacao = "Peso normal"
    )
    }
    }
