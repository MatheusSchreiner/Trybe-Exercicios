const assert = require('assert');

function secondThirdSmallest(array) {

  let results = [];

  array.sort((x, y) => x - y);

  results = [array[1], array[2]];
  
  return results;

};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.strictEqual(typeof secondThirdSmallest, 'function', 'Erro, não é uma função');
assert.deepStrictEqual(secondThirdSmallest(parameter), result, 'Erro, o código não retorna o que deveria');