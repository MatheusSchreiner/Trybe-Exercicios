let numbers = generatorNumbers(10);
let bigNumberAssorted = bigNumber(numbers);
whatSection(bigNumberAssorted);
whatNumbersArray(numbers);

function generatorNumbers(qntNumbes){
    let numbersAssorted = [];
    for(let count = 0; count <= qntNumbes; count += 1) {
        numbersAssorted.push(Math.ceil(Math.random() * 1000));
    }
    return numbersAssorted;
}

function bigNumber(arrayNumber){
    let number1 = arrayNumber[0];
    let number2 = 0;
    for(let count = 0; count < arrayNumber.length; count += 1) {
        number2 = arrayNumber[count];
        if(number2 > number1){
            number1 = number2;
        }
    }
    return (number1);
}

function whatSection(theBigNumber) {
    for(let count = 0; count < numbers.length; count += 1){
        if(numbers[count] == theBigNumber){
            console.log(count);
            break;
        }
    }
}

function whatNumbersArray(listNumber){
    for(let count = 0; count < numbers.length; count += 1){
        console.log(numbers[count]);
    }
}
