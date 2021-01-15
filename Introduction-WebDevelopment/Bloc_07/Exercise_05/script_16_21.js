const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

//Questão 17
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'Erro Questão 17');

//Questão 18
assert.strictEqual(myFizzBuzz(9), 'fizz', 'Erro Questão 18');

//Questão 19
assert.strictEqual(myFizzBuzz(5), 'buzz', 'Erro Questão 19');

//Questão 20
assert.strictEqual(myFizzBuzz(17), 17, 'Erro Questão 20');

//Questão 21
assert.strictEqual(myFizzBuzz('Matheus'), false, 'Erro Questão 21');