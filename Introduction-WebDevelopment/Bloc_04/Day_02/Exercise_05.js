let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let number1 = numbers[0];
let number2 = 0;

for(var cont = 0; cont < numbers.length; cont += 1){
    number2 = numbers[cont];
    if(number2 > number1){
        number1 = number2;
    }
}
console.log(number1);