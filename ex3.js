//TABUADA
const prompt = require('prompt-sync')();
const tab = +prompt("Digite um nº para obter a tabuada: ")
for (let i = 1; i <= 10; i++){
    console.log(`${tab} X ${i} = ${tab*i}`);
}

