### 1. 
~~~
SELECT active, COUNT(*)
FROM sakila.customer
GROUP BY active;
~~~
<br>

### 2. 
~~~
SELECT store_id, active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active;
~~~
<br>

### 3. 
~~~
SELECT AVG(rental_duration) AS avg_rental_duration, rating
FROM sakila.film
GROUP BY rating
ORDER BY avg_rental_duration DESC;
~~~
<br>

### 4. 
~~~
SELECT district, COUNT(*)
FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;
~~~
<br>

### 5. 
~~~
SELECT rating, AVG(length) duracao_media
FROM sakila.film
GROUP BY rating
HAVING duracao_media BETWEEN 115.0 AND 121.50
ORDER BY duracao_media DESC;
~~~
<br>

### 6. 
~~~
SELECT rating, SUM(replacement_cost) as custo_de_substituicao
FROM sakila.film
GROUP BY rating
HAVING custo_de_substituicao  > 3950.50
ORDER BY custo_de_substituicao;
~~~
<br>
