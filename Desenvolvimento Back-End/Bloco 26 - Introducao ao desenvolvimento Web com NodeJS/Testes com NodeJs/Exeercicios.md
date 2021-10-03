### 1. 
~~~
const sinon = require('sinon');
const { expect } = require('chai');

function verify(number) {
  if (number > 0) return 'positivo';
  if (number < 0) return 'negativo';
  return 'neutro';
};

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

~~~

### 3. 
~~~

~~~

### 4. 
~~~

~~~

### 5. 
~~~

~~~
