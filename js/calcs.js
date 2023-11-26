function calcularIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var imc = peso / (altura * altura);

    var resultado = document.getElementById("resultado");
    var imagem = document.getElementById("imagem");

    if (imc < 18.5) {
        resultado.innerHTML = imc.toFixed(2) + "Você está abaixo do peso.";  
        imagem.src = "../imagens/baixo-peso.png";
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML = imc.toFixed(2) + "Você está com peso normal." ;
        imagem.src = "peso_normal.png";
    } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = imc.toFixed(2) + "Você está acima do peso.";
        imagem.src = "acima_do_peso.png";
    } else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = imc.toFixed(2) + "Você está obeso.";
        imagem.src = "obeso.png";
    } else if (imc > 35) {
        resultado.innerHTML = imc.toFixed(2) + "Você está com obesidade II.";
        imagem.src = "obesidade_II.png";
    }
}