## Respostas
<br>

### 1. 
~~~
USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';
~~~
<br>

### 2. 
~~~
SELECT 1, 2, 3;
~~~
<br>

### 3. 
~~~
SELECT 10 + 15;
~~~
<br>

### 4. 
~~~
SELECT (3 * 4) + 12;
~~~
<br>

### 5. 
~~~
SELECT * FROM Scientists;
~~~
<br>

### 6. 
~~~
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;
~~~
<br>

### 7. 
~~~
SELECT Name FROM Scientists
ORDER BY Name ASC;
~~~
<br>

### 8. 
~~~
SELECT Name FROM Projects
ORDER BY Name DESC;
~~~
<br>

### 9. 
~~~
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') as resultado FROM Projects;
~~~
<br>

### 10. 
~~~
SELECT Name, Hours FROM Projects
ORDER BY Hours DESC LIMIT 3;
~~~
<br>

### 11. 
~~~
SELECT DISTINCT Project FROM AssignedTo;
~~~
<br>

### 12. 
~~~
SELECT Name FROM Projects
ORDER BY Hours DESC
LIMIT 1;
~~~
<br>

### 13. 
~~~
SELECT Name FROM Projects
ORDER BY Hours ASC
LIMIT 1
OFFSET 1;
~~~
<br>

### 14. 
~~~
SELECT * FROM Projects
ORDER BY Hours ASC
LIMIT 5;
~~~
<br>

### 15. 
~~~
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') as resultado FROM Scientists;
~~~
<br>
