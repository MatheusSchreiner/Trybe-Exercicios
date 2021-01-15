const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let arr = [];

  for (let person in people) {
    arr.push(greeting + people[person]);
  }
  return arr;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function', 'Erro, não é uma função');
assert.deepStrictEqual(greetPeople(parameter), result, 'Erro no código');


//Outra forma de reescrever o código acima
// const greetPeopleNew = (people) => {
//   const greeting = [];
//   for (const person in people) {
//     greeting.push(`Hello ${people[person]}`);
//   }
//   return greeting;
// };