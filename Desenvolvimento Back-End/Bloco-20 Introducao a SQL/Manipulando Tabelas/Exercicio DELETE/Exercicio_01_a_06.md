### 1. 
~~~
-- Primeiro descubra os IDs relacionados ao nome
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'KARL';

-- Em seguida, apague suas referências
DELETE FROM sakila.film_actor
WHERE actor_id = 12;

-- Depois exclua o item original
DELETE FROM sakila.actor
WHERE first_name = 'KARL';
~~~
<br>

### 2. 
~~~
-- Primeiro descubra os IDs relacionados ao nome
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- Em seguida, apague as referências
DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

-- Depois exclua o item original
DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';
~~~
<br>

### 3. 
~~~
DELETE FROM sakila.film_text
WHERE DESCRIPTION LIKE '%saga%';
~~~
<br>

### 4. 
~~~
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
~~~
<br>

### 5. 
~~~
Basta inspecionar e analisar uma a uma.
~~~
<br>

### 6. 
~~~
Abra o MySQL Workbench e se conecte a ele.
Selecione o banco sakila na lista de bancos de dados com o botão direito e clique em " Drop Schema ".
Selecione "Drop Now" .
Clique com o botão direito neste link e salve como arquivo .sql .
Selecione todo o conteúdo do arquivo (CTRL + A) e cole-o dentro de uma janela de nova query no MySQL Workbench .
Clique em executar para restaurar o banco de dados.
~~~
<br>
