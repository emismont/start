"use strict";
console.log("sou linda");
//string - texto, aspas simples, duplas, ascento grave
let nameUser = "Emilly";
console.log(nameUser);
//number - inteiro, decimais, hexadecimais, binários 
let Age = 19;
//boolean - true and false 
let StatusUser = true;
//array - variaveis indexadas, mais de uma informação, sempre começa em 0
let Fruits = ['maçã', 'Banana'];
//object - objetos, propriedade, fnções ?opcional 
let company = {
    Name: string,
    Address: string
};
//date - ano mes e dia, hora min e segundo. Timestamp quantidade de segundos desde 01/01/1970
let bornDate = new Date('2023-02-09');
//tuple - conjunto de informaçãoes já sabendo quais e a ordem, so aceita com esse formato
let address = ['av paulista', 1000];
//enum- lista de valores possíveis, se é isso isso ou isso.
var statusUserEnum;
(function (statusUserEnum) {
    statusUserEnum[statusUserEnum["blocked"] = 0] = "blocked";
    statusUserEnum[statusUserEnum["released"] = 1] = "released";
    statusUserEnum[statusUserEnum["pending"] = 2] = "pending";
})(statusUserEnum || (statusUserEnum = {}));
let options = 0;
//Any - não recomendado, qualquer tipo 
let obs = 'true';
//VARIÁVEIS
//informação guardada na memória, variaveis de memórias, uteis para quando precisa no momento 
let variavelMutavel = 'Esta é uma variáve que pode mudar de valor';
const variavelImutavel = 'Está variável não pode mudar, por isso const';
console.log(variavelMutavel);
//Variáveis indexada
// começa a contagem de 0,1,2... 
let bmw = { "320 i": , "M3":  };
console.log(bmw.lenght);
console.log(bmw.at(-1));
//VETOR DE VETORES OU MATRIZ
//array dentro de outro array
let montadoras = [
    ["BMW"]["AUDI"]["MERCEDES"]
];
console.log(montadoras[1][0]);
