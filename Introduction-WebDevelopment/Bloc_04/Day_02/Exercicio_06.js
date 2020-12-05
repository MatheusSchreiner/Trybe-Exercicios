let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;


for(var cont = 0; cont < numbers.length; cont += 1){
    if((numbers[cont] % 2) == 1){
        soma += 1;
    }
}
console.log(soma);