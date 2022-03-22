//Peça ao usuário uma quantidade de linhas e e outra de colunas, e imprima essas informações na forma de uma tabela.
const prompt = require('prompt-sync')()
const numLines = +prompt("Digite o nº de linhas: ")
const numColumns = +prompt("Digite o nº de colunas: ")
for (let line = 0; line < numLines; line++){
    const nums = []
    for (let i = line; i < line + numColumns; i++){
        nums.push(i);
    }
    console.log(nums);
}