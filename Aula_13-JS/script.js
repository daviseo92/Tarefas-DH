// exercicio 1
var numeroPositivo = 5
var numeroNegativo = -5
var numeroDecimal = 0.5
var umaString = "ola world"
var umVerdadeiro = (1===1)

// exercicio 2
console.log (numeroPositivo);
console.log (numeroNegativo);
console.log (numeroDecimal);
console.log (umaString);
console.log (umVerdadeiro);

// exercicio 3
var nome = "Davi"
var sobrenome = "Seo"
console.log (nome + " " + sobrenome);

// exercicio 6
var texto = "aaslkjfahsjkdhfajkshdjfasjkdhfkahjshdfjahkfdahskdjfhaskljdhfkasj\nhaksjfhaksjh aksjhfak sjhf\tkajshdfk sahdfk ahjsdkf"
console.log (texto);
// usar o \n quebra a linha e \t da "tab" no texto

// exercicio 7
var valorNulo = "null"
var naoDefinido = "undefined"
console.log (valorNulo);
console.log (naoDefinido);

//exercicio 8
var frutas = ['banana', 'maca', 'ameixa', 'abacaxi', 'tomate']
// chamando apenas
console.log (frutas);

// usando foreach
frutas.forEach(function(item, index, array){
    console.log (index, item)
});

//usando for
for (var i=0; i<frutas.length; i++){
    console.log (frutas[i]);
}

