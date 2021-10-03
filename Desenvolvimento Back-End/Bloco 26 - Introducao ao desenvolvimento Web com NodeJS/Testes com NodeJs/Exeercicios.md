### 1. 
~~~
const sinon = require('sinon');
const { expect } = require('chai');
const verify = require('./verify.js');

describe('Testando a função verify', () => {
  it('Retorna uma string', () => {
    const response = verify(0);
    expect(response).to.be.an('string')
  });
  it('retorna positivo para um número maio que 0', () => {
    const response = verify(1);
    expect(response).to.be.equal('positivo');
  });
  it('retorna negativo para um número menor que 0', () => {
    const response = verify(-1);
    expect(response).to.be.equal('negativo');
  });
  it('retorna neutro para um número igual a 0', () => {
    const response = verify(0);
    expect(response).to.be.equal('neutro');
  });
});
~~~

### 2. 
~~~
module.exports = (number) => {
  if (number > 0) return 'positivo';
  if (number < 0) return 'negativo';
  return 'neutro';
};
~~~

### 3. 
~~~
module.exports = (number) => {
  if (typeof number !== 'number') return 'o valor deve ser um número';
  if (number > 0) return 'positivo';
  if (number < 0) return 'negativo';
  return 'neutro';
};

it('o parâmetro passado deve ser do tipo número', () => {
  const response = verify('teste');
  expect(response).to.be.equal('o valor deve ser um número');
});
~~~

### 4. 
~~~

~~~

### 5. 
~~~

~~~
