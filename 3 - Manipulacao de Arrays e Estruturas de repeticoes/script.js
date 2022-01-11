function manipulando() {

    var lista = ["arroz", "feijao", "macarrao", "carne", 20];

    //buscar valor no array, se existir ele retorna a posição, se não existir retorna -1
    lista.indexOf("feijao")

    //transformar o array em String
    lista.join(","); //vai separar os elementos do array usando virgulas
    lista.join("/"); //vai separar os elementos do array usando barras e assim por diante

    //remover o ultimo elemento do array
    lista.pop();

    //remover o primeiro elemento do array
    lista.shift(); //tambem vai retornar o que foi removido

    //adicionar no final do array
    lista.push();

    //estruturas de repetição, for: 
    for (let x = 0; x < 10; x++) {
        document.write("O valor de X é: " + x + "</br>");
    }

    document.write("</br>");

    //estruturas de repetição, while:
    let x = 0;
    while (x <= 10) {
        document.write("O valor de X é: " + x + "</br>");
        x++;
    }


}