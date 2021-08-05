## Respostas
<br>

### 1. 
~~~
USE Scientists;
SELECT * FROM Scientists
WHERE Name LIKE "%e%";
~~~
<br>

### 2. 
~~~
USE Scientists;
SELECT Name FROM Projects
WHERE Code LIKE "A%" ORDER BY Name;
~~~
<br>

### 3. 
~~~
USE Scientists;
SELECT Code, Name FROM Projects
WHERE Code LIKE "%3%" ORDER BY Name;
~~~
<br>

### 4. 
~~~
USE Scientists;
SELECT Scientist FROM AssignedTo
WHERE Project IN('AeH3', 'Ast3', 'Che1');
~~~
<br>

### 5. 
~~~
USE Scientists;
SELECT * FROM Projects
WHERE Hours > 500;
~~~
<br>

### 6. 
~~~
USE Scientists;
SELECT * FROM Projects WHERE Hours > 250 AND Hours < 800;
-- ou
SELECT * FROM Projects WHERE Hours BETWEEN 250 AND 800;
~~~
<br>

### 7. 
~~~
USE Scientists;
SELECT Code, Name FROM Projects
WHERE Name NOT LIKE 'A%';
~~~
<br>

### 8.
~~~
USE Scientists;
SELECT Name FROM Projects
WHERE Code LIKE '%H%';
~~~
<br>
