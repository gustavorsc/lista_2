function ex5() {

    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    let op = Number(document.getElementById("op").value)
    // operar os numeros de acordo com a escolha do usuario
    let resultado
    switch (op) {
        case 1: resultado = (num1 + num2) / 2
            break// força a saida do switch
        case 2: if (num1 >= num2) {
            resultado = num1 - num2
        }
        else {
            resultado = num2 - num1
        }
            break
        case 3: resultado = num1 * num2
            break
        case 4: if (num2 != 0) {
            resultado = num1 / num2
            // !(exclamação) serve como negação do sinal != significa diferente
            // ctrl + shift + F = identação automatica
        }
        else {
            resultado = "Divisão por zero"
        }
            break
        default: resultado = "opção inválida"
    }
    document.getElementById("divresultado").innerHTML = "O resultado é: " + resultado
}

function ex23() {

    let cod = Number(document.getElementById("cod").value)
    let qnt = Number(document.getElementById("qnt").value)

    let preco = 0

    if (cod > 0 & cod <= 10) {
        preco = 10.00
    }
    else if (cod > 10 & cos <= 20) {
        preco = 20.00
    }
    else if (cod > 20 & cos <= 30) {
        preco = 30.00
    } else if (cod > 30 & cos <= 40) {
        preco = 40.00
    }
    else {
        document.getElementById("divpreco").innerHTML = "codigo não identificado"
    }
    document.getElementById("divpreco").innerHTML = "o preço do produto é de: " + preco
    let precototal = qnt * preco
    if (precototal < 0) {
        alert("quantidade negativa")
    }
    else {
        document.getElementById("divprecototal").innerHTML = "o preço total do produto é de: " + precototal
    }

    let desc
    if (precototal < 250) {
        desc = precototal * 0.05
    }
    else if (precototal > 250 & precototal <= 500) {
        desc = precototal * 0.10
    }
    else if (precototal > 500) {
        desc = precototal * 0.15
    }

    document.getElementById("divdesc").innerHTML = "o valor do desconto aplicado é de: " + desc

    let precofinal = precototal - desc

    document.getElementById("divprecofinal").innerHTML = "o preço final do produto é de: " + precofinal

}

