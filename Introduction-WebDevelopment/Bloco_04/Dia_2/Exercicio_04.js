let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritimetica = 0;

for(var cont = 0; cont < numbers.length; cont += 1){
    soma = soma + numbers[cont];     
}
mediaAritimetica = soma / numbers.length;
if(mediaAritimetica > 20){
    console.log('Valor maior que 20'); 
} else {
    console.log('Valor menor que 20');
}
