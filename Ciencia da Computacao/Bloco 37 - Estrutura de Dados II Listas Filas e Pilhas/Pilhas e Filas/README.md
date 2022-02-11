## Descrição das Atividades
<br>

### 1. Estenda a classe Stack , que escrevemos durante as explicações do conteúdo, adicionando uma nova função chamada min_value() que irá retornar o menor valor inteiro presente na pilha. Por exemplo:
~~~
# 1. ...

content_stack.push(1)
content_stack.push(-2)
content_stack.push(3)
print(content_stack.min_value()) # saída: -2
~~~
### 2. Estenda a classe Stack , que escrevemos durante as explicações do conteúdo, para que ela suporte um limite de itens dentro da pilha. Se definirmos que a pilha deve ter o tamanho dois, ela não poderá ter três itens. Por exemplo:
~~~
# 2. ...

content_stack = LimitStack(2)
content_stack.push(1)
content_stack.push(-2)

try:
    content_stack.push(3)
except StackOverflow:
    print("Não é possível adicionar outro item à pilha")
~~~
### 3. Um estacionamento comercial possui uma garagem em forma de linha, ou seja, somente é possível parar os carros enfileirados. Para auxiliar as pessoas que trabalham manobrando os veículos, iremos escrever um programa para que eles consigam adicionar novos veículos na garagem e retirar os veículos conforme a solicitação dos clientes. Escreva um programa que faça essas duas operações, inserção de veículos e a remoção do veículo desejado pela pessoa. Lembrando que os veículos que foram removidos para se chegar no veículo do cliente, ficam parados na rua e depois são adicionados na mesma ordem que estavam no estacionamento.
### 4. Dada a função que faz a resolução de expressões pós fixas, adicione as operações de subtração e divisão. Considere os exemplos abaixo para testar a sua alteração na função.
Nota: transforme as expressões em pós fixas e atribua valores. Caso seja necessário, faça o cast do valor para ponto flutuante.

### 5. Dado uma string , contendo letras e parênteses. Crie uma função que irá reverter os caracteres de tal forma que somente os caracteres dentro dos parênteses sejam revertidos. A string final não deve conter os parênteses. Por exemplo
~~~
string = 'teste(lagel)'
resultado = 'testelegal'
~~~
