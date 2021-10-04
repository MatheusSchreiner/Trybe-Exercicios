### 1. 
~~~
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
const fs = require('fs');
const { expect } = require('chai');

const escreveArquivo = require('./escreverArquivo');

describe('Executa a função escreverArquivo', () => {
  it('a resposta é uma string', () => {
    const resposta = escreveArquivo('arquivo.txt', '#Isso ai');
    expect(resposta).to.be.a('string');
  });

  it('a resposta é um ok', () => {
    const resposta = escreveArquivo('arquivo.txt', '#Isso ai');
    expect(resposta).to.be.equals('ok');
  });
});
~~~

### 5. 
~~~
const fs = require('fs');

module.exports = (nomeDoArquivo, conteudoDoArquivo) => {
  fs.writeFileSync(`${__dirname}/${nomeDoArquivo}`, conteudoDoArquivo);

  return 'ok';
};


const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const escrevaArquivo = require('./escrevaArquivo');

describe('Executa a função escrevaArquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.equals('ok');
    });
  });
});
~~~
