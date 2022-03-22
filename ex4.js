/*Faça um programa que carregue uma lista com os modelos de cinco carros.
Carregue uma outra lista com o consumo desses carros, isto é, quantos quilômetros
cada um desses carros faz com um litro de combustível. Calcule e mostre:
O modelo do carro mais econômico;
Quantos litros de combustível cada um dos carros cadastrados consome para percorrer
uma distância de 1000 quilômetros e quanto isto custará, considerando um que a gasolina custe R$ 5,50 o litro.
*/
console.clear();
const prompt = require('prompt-sync')();
let cars = [];
let consCars = [];
const consLit = [];
const consDin = [];
console.log("Digite o modelo de 5 carros: ");
console.log();
for (let quantidade = 1; quantidade <=5; quantidade++){
    const insCar = prompt(`Insira o ${quantidade}º modelo de carro: `)
    const insCons = +prompt(`Insira o consumo do ${quantidade}º modelo de carro: `)
    cars.push(insCar);
    consCars.push(insCons);
}
console.clear();
console.log();
for (let consumo = 0; consumo < consCars.length; consumo++){
    const consCom = (1000/consCars[consumo]);
    const consR$ = (1000/consCars[consumo]*5.5);
    consLit.push(consCom.toFixed(2))
    consDin.push(consR$.toFixed(2))
}
for (let i = 0; i < consCars.length; i++){
    console.log(`${cars[i]} gasta ${consLit[i]} litros de gasolina, você gastará um total de R$ ${consDin[i]} para uma viagem de 1000km`);
}
//FUNÇÃO PARA TRANSFORMAR ARRAYS EM OBJETOS.
/*
function convertToObj(cars, consCars){
    if(cars.length != consCars.length || cars.length == 0 || consCars.length == 0){
     return null;
    }
    let obj = {};
      
    cars.forEach((k, i) => {obj[k] = consCars[i]})
    return obj;
  }
  console.log(convertToObj(cars, consCars));
  console.log(Math.max.apply(null, carsEconsCars));
  */
 
  
