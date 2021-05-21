//Questões 1 - 5

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw 'parameters must be numbers';
  }

  return a + b;
}

//Questão1
const expected = typeof sum;
assert.strictEqual(expected, 'function', 'Erro teste 1');

//Questão 2 
const expected2 = sum(4, 5);
assert.strictEqual(expected2, 9, 'Erro teste 2');

//Questão 3
const expected3 = sum(0, 0);
assert.strictEqual(expected3, 0, 'Erro teste 3');

//Questão 4
const expected4 = sum(4, 5);
assert.strictEqual(expected4, 9, 'Erro teste 4');

assert.throws(() => {
  sum(4, '');
  sum('', 'number');
}, /^parameters must be numbers$/); 
//Esta mensagem aqui tem que ser exatamente igual a mensagem do throw que esta declarado no if se não ele da erro
//Apartir do momento que as mensagens são iguais, ele não da erro, no caso o teste funciona, mas se você apagar a mensagem daqui de baixo
//Ele irá funcionar normalmente tbm, o throw nada mais que é que um teste onde vc já passa os parametros que são pra dar erro
//Para observar se o seu código esta preparado para estes erros, e quando la no seu código ele cai onde deveria quando entra com um dado errado
//Tera o throw la em cima que irá voltar com uma mensagem e esta mensagem deve ser igual com a debaixo apenas pra vc saber
//Se ele caiu exatamente no mesmo local onde deveria dar erro, pq imagine um codigo enorme onde teriam mais de 1 throw, dessa forma você
//Saberá exatamente qual é qual onde que o erro caiu e tudo isso.

