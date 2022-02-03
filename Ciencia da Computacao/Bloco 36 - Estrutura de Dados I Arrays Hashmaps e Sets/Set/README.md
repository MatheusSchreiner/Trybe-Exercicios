## Descrição das Atividades
<br>

### 1. Blefe
Blefe é um jogo de duas pessoas onde cada uma tenta adivinhar os número que a outra irá escolher. Cada jogador escolhe 5 números de 0 a 10, inclusive. A pontuação final é calculada da seguinte forma:
A nota de partida de cada pessoa é o maior número que a outra pessoa não escolheu;
O redutor é o menor numero que a outra pessoa não escolheu;
A pontuação final é a nota de partida - redutor .
~~~
clara = [0, 1, 5, 9, 10]
# 1. nota de partida: 5
# 2. redutor: 1
# 3. pt: 4

marco = [0, 2, 8, 9, 10]
# 4. nota de partida: 8
# 5. redutor: 2
# 6. pt individual: 6

# 7. Quem ganhou: Marco

// Implemente uma função que receba um dicionário com os nomes e números chutados e retorne o nome de quem ganhou.

entrada = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}

# 8. saída: 'Marco'
~~~

### 2. Substring
Dada uma string , ache o tamanho da maior substring que não tenha caracteres repetidos. Complexidade de tempo limite aceitável: O(n^2) .
~~~
str = "serdevemuitolegalmasehprecisoestudarbastante"
~~~

### 3. Continuação dos exercícios de fixação
Continue os exercícios de fixação para terminar de implementar as operações de conjuntos:
difference ;
issubset ;
issuperset .
Desafio
Otimizar o algoritmo do exercício 2 para ter uma complexidade de tempo limite de O(n) .
