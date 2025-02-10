var notas = [7.0, 8.0, 4.0];

var soma = 0;

for (var i = 0; i < 3; i++) {
    soma += notas[i];
}

var media = soma / 3;


console.log("A sua média foi:" + media.toFixed(2));

if(media >= 7){
    console.log("Você foi aprovado dentro da média");
}
else if(media < 7 ){
    console.log("Você está reprovado")
}


