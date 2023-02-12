"use strict";
console.log("bem vindo");
//String: um tipo de texto, pode ser aspas simples, duplas e ascento
let nameUser = "Emilly";
let lastNameUser = "Moura";
let fullName = `${nameUser} ${lastNameUser}`;
console.log(fullName);
//Number: inteiros, decimais, hexadecimais e binários 
let age = 33;
// Boolean: true and False, muito usados para testes condicionais 
let statusUser = true;
//Array: variaveis indexadas, mais de um valor e precisa armazenar em mais de um lugar.
let fruits = ['Maçã', 'Banana'];
let fruits2 = ['Maçã', 'Banana'];
let fruits3 = ['Maçã', 'Banana', 10];
//Object: objetos, propriedades e funcionalidades
let company = {
    name: 'Hcode',
    address: "Avenida Paulista, 101"
};
//Date: ano, mes e dia. Hora min e seg, timestamp quantidade de segundos a partir de 01 de janeiro de 1970. UNIX
let bondDate = new Date('2023-02-12');
//Tuple: Conjunto de informações sabendo quais.
let address = ["Av.Paulista", 1000];
//Enum: listas de valores possiveis EX: bloqueado, liberado e pendente
var statusUserEnum;
(function (statusUserEnum) {
    statusUserEnum[statusUserEnum["blocked"] = 0] = "blocked";
    statusUserEnum[statusUserEnum["released"] = 1] = "released";
    statusUserEnum[statusUserEnum["pending"] = 2] = "pending";
})(statusUserEnum || (statusUserEnum = {}));
let options = statusUserEnum.blocked;
let options2 = 0;
//Any: Qualquer dado, porém n é recomendado
let obs = "Qualquer coisa";
