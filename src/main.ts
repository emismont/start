console.log("bem vindo");

//String: um tipo de texto, pode ser aspas simples, duplas e ascento
let nameUser: string = "Emilly"
let lastNameUser: string = "Moura"
let fullName: string = `${nameUser} ${lastNameUser}`;
console.log(fullName);
//Number: inteiros, decimais, hexadecimais e binários 
let age: number = 33;
// Boolean: true and False, muito usados para testes condicionais 
let statusUser: boolean = true;

//Array: variaveis indexadas, mais de um valor e precisa armazenar em mais de um lugar.
let fruits: Array<string> = ['Maçã', 'Banana'];
let fruits2: string[] = ['Maçã', 'Banana'];
let fruits3: Array<string|number> = ['Maçã', 'Banana', 10];
//Object: objetos, propriedades e funcionalidades
let company: object = {
    name: 'Hcode',
    address: "Avenida Paulista, 101"
};
//Date: ano, mes e dia. Hora min e seg, timestamp quantidade de segundos a partir de 01 de janeiro de 1970. UNIX
let bondDate = new Date('2023-02-12');
//Tuple: Conjunto de informações sabendo quais.
let address: [string, number] = ["Av.Paulista", 1000];
//Enum: listas de valores possiveis EX: bloqueado, liberado e pendente
enum statusUserEnum {
    blocked = 0,
    released = 1,
    pending = 2
}

let options: statusUserEnum = statusUserEnum.blocked;
let options2: statusUserEnum = 0;
//Any: Qualquer dado, porém n é recomendado
let obs:any = "Qualquer coisa"