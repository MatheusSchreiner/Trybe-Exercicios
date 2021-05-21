const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

//Questão 12
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'Erro Questão 12');

//Questão 13
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Erro Questão 13');

//Questão 14
const array = [1, 2, 3, 4];
myRemoveWithoutCopy(array, 4);
assert.deepStrictEqual(array, [1, 2, 3], 'Erro Questão 14');

//Questão 15
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Erro Questão 15');