const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let number = 1;

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      results.push(number);
      number += 1;
    } else {
      results.push(characters[i]);
    }
  }
  return results.join('');
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowels, 'function', 'Erro, não é uma função');
assert.strictEqual(removeVowels(parameter), result, 'Erro, o código não retorna o que deveria');