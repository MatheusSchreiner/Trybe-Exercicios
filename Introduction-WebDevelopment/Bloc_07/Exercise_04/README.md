## Descrição das Atividades

#### Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
#### Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
#### Crie uma função para mostrar o tamanho de um objeto.
#### Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
#### Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.
#### Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
#### Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

~~~
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
~~~

#### Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

~~~
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
~~~

#### Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
