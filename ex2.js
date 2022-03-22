// CALCULADORA FATORIAL n!
const prompt = require('prompt-sync')();
const fat = +prompt("Digite um nº para obter o FATORIAL: ")
const listFat = [];
for(let i = 1; i <= fat ; i++){
    listFat.push(i)
}
const total = listFat.reduce((a, b) => a * b)
console.log(`O fatorial de ${fat} é ${total}`);
