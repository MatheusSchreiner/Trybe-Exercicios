## Descrição das Atividades

### Nessa parte os exercícios estão divididos em dois grupos: primeiro, você vai escrever código baseado nos testes. Depois você lerá um código e o que ele tem que trazer de resposta. A partir disso, você escreverá testes e os usará de base para alterar o código. 

#### 1. Escreva a função addOne para passar nos testes já implementados.
~~~
const assert = require('assert');
// escreva a função addOne aqui

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
~~~

#### 2. Escreva a função wordLengths para passar nos testes já implementados.
~~~
const assert = require('assert');
// escreva a função wordLengths aqui

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
~~~

#### 3. Escreva a função sumAllNumbers para passar nos testes já implementados.
~~~
const assert = require('assert');
// escreva a função sumAllNumbers aqui

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
~~~

#### 4. Escreva a função findTheNeedle para passar nos testes já implementados.
~~~
const assert = require('assert');
// escreva a função findTheNeedle aqui

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
~~~

#### 5. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
~~~
const greetPeople = (people) => {
  let greeting = 'Hello ';

  for (const person in people) {
    greeting += people[person];
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
~~~

#### 6. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
~~~
const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      results.push(characters[i]);
    } else {
      results.push('_');
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';
~~~

#### 7. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
~~~
const greaterThanTen = (array) => {
  let results = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      results += array[i];
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
~~~

#### 8. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
~~~
function secondThirdSmallest(array) {
    let results = []
    array.sort(function (x, y) {
        return x + y;
    });
    results = [array[1], array[2]];
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
~~~