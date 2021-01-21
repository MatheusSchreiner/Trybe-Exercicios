
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  return names.reduce((valueTotal, valueArray) => valueTotal + valueArray.split('').reduce((valueSum, valueArraySplit) => {
    if (valueArraySplit === 'a' || valueArraySplit === 'A') return valueSum + 1; return valueSum;}, 0), 0);
};

assert.deepStrictEqual(containsA(), 20);
