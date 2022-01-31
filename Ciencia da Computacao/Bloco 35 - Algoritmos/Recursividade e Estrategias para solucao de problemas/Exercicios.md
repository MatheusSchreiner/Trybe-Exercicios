### 1. 
~~~
def conta_pares(n):
    numero_de_pares = 0
    for num in range(n+1):
        if num % 2 == 0 and num != 0:
            numero_de_pares += 1
    return numero_de_pares
~~~
<br>

### 2. 
~~~
def conta_pares(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + conta_pares(n-1)
    else:
        return conta_pares(n-1)
~~~
<br>

### 3. 
~~~
def maiorinteiro_aux(lista, tamanho):
    if tamanho == 1:
        return lista[0]
    else:
        maior_do_resto_da_lista = maiorinteiro_aux(lista, tamanho-1)
        if maior_do_resto_da_lista > lista[tamanho-1]:
            return maior_do_resto_da_lista
        else:
            return lista[tamanho-1]


def maiorinteiro(lista):
    tamanho = len(lista)
    return maiorinteiro_aux(lista, tamanho)


print(maiorinteiro([1, 21, 300, 4, 57]))
~~~
<br>

### 4. 
~~~
def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)
~~~
<br>

### 5. 
~~~
def temdivisor(n, i, j):
    if i > j:
        return False
    elif n % i == 0:
        return True
    else:
        return temdivisor(n,i + 1,j)


def primo(n):
    return n > 1 and not(temdivisor(n, 2, n - 1))


print(primo(997))
~~~
<br>

### 6. 
~~~
def torres_hanoi(numero_de_discos, a, b, c):
    if numero_de_discos == 1:
        print ("Move disco %d de %s para %s" % (numero_de_discos, a, c))
    else:
        torres_hanoi(numero_de_discos - 1,a ,c ,b)
        print ("Move disco %d de %s para %s" % (numero_de_discos, a, c))
        torres_hanoi(numero_de_discos - 1, b, a, c)


print (torres_hanoi(3, a='primeiro', b='meio', c='fim'))
~~~
