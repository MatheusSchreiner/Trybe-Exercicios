const assert = require('assert');
// escreva a função sumAllNumbers aqui

function sumAllNumbers(numbers) {
  let result = 0;
  for (let i of numbers) {
    result += i;
  }
  return result;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);