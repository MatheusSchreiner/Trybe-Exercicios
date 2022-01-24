### 1. 
~~~
O algoritmo ordena o array independente de qualquer coisa, então
o seu pior caso, melhor caso e caso médio são, no mínimo,
complexidade do algoritmo de ordenação do Python. Vendo a documentação,
vemos que tal algoritmo é O(n log n). Dado que, depois de ordenar, no pior
caso passamos pelo array inteiro uma vez só, isso seria O(n). Assim sendo,
a complexidade é O(n*log(n) + n) o que, simplificando, fica O(n log n)
~~~
<br>

### 2. 
~~~
""" Mesmo para um array bidimensional, o acesso a um elemento é O(1).
A complexidade de espaço também é O(1), pois não consideramos a entrada em seu cálculo."""

def battleship(grid, line, column):
    if(grid[line][column] == 1): return True

    return False
~~~
<br>

### 3. 
~~~
A função map itera sobre todo o array. O código, portanto, é O(n).
~~~
<br>

### 4. 
~~~
 As três funções iteram por todo o array, uma depois da outra.
A ordem de complexidade, portanto, seria O(n + n + n), ou O(3n),
mas dizemos O(n) para simplificar
~~~
<br>

### 5. 
~~~
"""Mesmo que, para o exemplo dado, o valor de `n` seja muito menor que o valor da constante `100`, para valores de `n` grandes o valor da constante se torna desprezível. Esse problema, então, é `O(n)`. Pelo mesmo motivo, a complexidade de espaço é constante, ou seja, `O(1)`"""

import random

def randomAverages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average/n
        list_of_averages.append(average)

    return list_of_averages
~~~
<br>

### 6. 
~~~
Para os três casos, utilizando a função `max()` do Python, a complexidade será O(n). A lista abaixo da função `max()` também é executada em O(n). Ou seja, O(n) + O(n) = O(n). A complexidade de espaço também é O(n), pois quanto mais crianças temos, maior vai ser o tamanho da lista gerada. Faça a analise de complexidade de espaço também.
~~~
<br>
