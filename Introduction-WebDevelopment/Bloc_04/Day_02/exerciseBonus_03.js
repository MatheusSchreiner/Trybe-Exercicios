let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];

for(var count = 0; count < numbers.length; count += 1){
    
    if(count  < (numbers.length) - 1){
        numbers2.push(numbers[count] * numbers[count+1]);
    } else {
        numbers2.push(numbers[count] * 2);
    }
    console.log(numbers2[count]);       
}
