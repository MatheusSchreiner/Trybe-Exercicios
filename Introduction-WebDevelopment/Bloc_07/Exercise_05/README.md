## Descrição das Atividades

### 1. A função sum(a, b) retorna a soma do parâmetro a com o b
### 2. Teste se o retorno de sum(4, 5) é 9
### 3. Teste se o retorno de sum(0, 0) é 0
### 4. Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
### 5. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5"),
~~~
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
~~~

### 6. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
### 7. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
### 8. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
### 9. Verifique se o array passado por parâmetro não sofreu alterações
### 10. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
~~~
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
~~~

### 11. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
### 12. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
### 13. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
### 14. Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
### 15. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
~~~
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

// implemente seus testes aqui
~~~

### 16. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
### 17. Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
### 18. Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
### 19. Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
### 20. Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
### 21. Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
~~~
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
~~~

### 22. Compare dois objetos (JSON) para verificar se são idênticos ou não
~~~
const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
~~~