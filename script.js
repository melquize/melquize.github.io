function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var inputAnoNascimento = document.getElementById("txtano");
    var resultado = document.querySelector("div#resultado");

    /* Condicoes do if:
        1 - verifica se a caixa está vazia, se o comprimento é igual a 0.
        2 - verifica se o valor é acima do ano atual.
    */
    if(inputAnoNascimento.value.length == 0 || Number(inputAnoNascimento.value) > ano) {
        window.alert("[Erro] Verifique os dados e tente novamente!");
    } else {
        var radioRadsex = document.getElementsByName("radsex");
        var idade = ano - Number(inputAnoNascimento.value);
        resultado.innerHTML = `Idade calculada: ${idade}`;
        var genero = '';
        var img = document.createElement("img");
        img.setAttribute("id", "foto")

        if (radioRadsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "imgs/bebe_menino.png");
            } else if (idade < 21){
                // Jovem
                img.setAttribute("src", "imgs/jovem_homem.png");
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "imgs/adulto_homem.png");
            } else {
                // Idoso
                img.setAttribute("src", "imgs/idoso_homem.png");
            }
        } else if (radioRadsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "imgs/bebe_menina.png");
            } else if (idade < 21){
                // Jovem
                img.setAttribute("src", "imgs/jovem_mulher.png");
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "imgs/adulta_mulher.png");
            } else {
                // Idoso
                img.setAttribute("src", "imgs/idosa_mulher.png");
            }
        }
        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img);
    }
}

