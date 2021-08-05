## Respostas
<br>

### 1. 
~~~
SELECT Piece, Price FROM Provides
WHERE Provider = 'RBT';
~~~
<br>

### 2. 
~~~
SELECT Piece, Price FROM Provides
ORDER BY Price DESC
LIMIT 5;
~~~
<br>

### 3. 
~~~
SELECT DISTINCT Provider, Price FROM Provides
ORDER BY Price DESC
LIMIT 4
OFFSET 3;
~~~
<br>

### 4. 
~~~
SELECT * FROM Provides
WHERE Provider = 'HAL'
ORDER BY Price DESC;
~~~
<br>

### 5. 
~~~
SELECT COUNT(Provider) FROM Provides
WHERE Piece = 1;
~~~
<br>
