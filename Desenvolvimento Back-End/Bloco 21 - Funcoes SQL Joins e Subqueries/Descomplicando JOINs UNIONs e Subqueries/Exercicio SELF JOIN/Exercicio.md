### 
~~~
SELECT 
    A.film_id, A.replacement_cost, B.film_id, B.replacement_cost
FROM
    sakila.film AS A,
    sakila.film AS B
WHERE
    A.replacement_cost = B.replacement_cost;
~~~
<br>

### 
~~~
SELECT 
    A.title, A.rental_duration, B.title, B.rental_duration
FROM
    sakila.film AS A,
    sakila.film AS B
WHERE
    A.rental_duration = B.rental_duration
HAVING A.rental_duration BETWEEN 2 AND 4;
~~~
<br>
