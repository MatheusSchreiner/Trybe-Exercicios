const assert = require('assert');
// escreva a função wordLengths aqui

function wordLengths(words) {
  const arr = [];
  for (let i of words) {
    arr.push(i.length);
  }
  return arr;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);