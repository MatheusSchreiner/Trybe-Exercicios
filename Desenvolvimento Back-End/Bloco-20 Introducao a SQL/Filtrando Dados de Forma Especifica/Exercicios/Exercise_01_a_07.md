## Respostas
<br>

### 1. 
~~~
USE PecasFornecedores;
SELECT * FROM Pecas
WHERE name LIKE 'GR%';
~~~
<br>

### 2. 
~~~
USE PecasFornecedores;
SELECT * FROM Fornecimentos
WHERE peca = 2 ORDER BY fornecedor;
~~~
<br>

### 3. 
~~~
USE PecasFornecedores;
SELECT peca, preco, fornecedor FROM Fornecimentos
WHERE fornecedor LIKE '%N%';
~~~
<br>

### 4. 
~~~
USE PecasFornecedores;
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA' ORDER BY name DESC;
~~~
<br>

### 5. 
~~~
USE PecasFornecedores;
SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE '%F%';
~~~
<br>

### 6. 
~~~
USE PecasFornecedores;
SELECT * FROM Fornecimentos
WHERE preco BETWEEN 15 AND 40 ORDER BY preco;
~~~
<br>

### 7. 
~~~
USE PecasFornecedores;
SELECT COUNT(*) FROM Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';
~~~
<br>
