function helloWorld() {
    console.log("Hello world!");
}


function soma(a, b) {
   
    return  Number(a) + Number(b);
}

function tipo () {
     
    let string = "Conteudo";
    let number = 1;
    let boolean = false;
    let symbol = Symbol("foo");
    let object = {nome: "Julia"};
    let array = ["Morango", "Pessego", "Melancia"];

    console.log(string + ":" + typeof(string));
    console.log(number + ":" + typeof(number));
    console.log(boolean + ":" +typeof(boolean));
    console.log(symbol.toString() + ":" + typeof(symbol));
    console.log(object.nome + ":" + typeof(object));
    console.log(array + ":" + typeof(array));
    console.log(Array.isArray(array));

    return ":)";
}

function par(numero) {
    if (numero %2== 0) {
        console.log("O numero é par!");
    } else {
        console.log("O numero é ímpar!");
    }
}


/*---------- chamadas -------------*/

helloWorld();


valorSoma = soma(2, 2);//soma("s", 2)
console.log(valorSoma);

tipo();

numero = Number(prompt("Informe o numero:"));

par(numero);