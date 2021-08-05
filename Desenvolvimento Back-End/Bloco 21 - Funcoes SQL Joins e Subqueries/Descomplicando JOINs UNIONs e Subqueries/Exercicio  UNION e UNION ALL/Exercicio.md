### 1. 
~~~
SELECT 
    first_name, last_name
FROM
    sakila.actor 
UNION ALL SELECT 
    first_name, last_name
FROM
    sakila.staff;
~~~
<br>

### 2. 
~~~
SELECT 
    first_name
FROM
    sakila.customer
WHERE
    first_name LIKE '%tracy%' 
UNION SELECT 
    first_name
FROM
    sakila.actor
WHERE
    first_name LIKE '%je%';
~~~
<br>

### 3. 
~~~
(SELECT 
    first_name
FROM
    sakila.actor
ORDER BY actor_id DESC
LIMIT 5) UNION (SELECT 
    first_name
FROM
    sakila.staff
LIMIT 1) UNION (SELECT 
    first_name
FROM
    sakila.customer
LIMIT 5 OFFSET 15) ORDER BY first_name;
~~~
<br>

### 4. 
~~~
(SELECT 
    first_name, last_name
FROM
    sakila.customer
ORDER BY first_name , last_name
LIMIT 60) UNION (SELECT 
    first_name, last_name
FROM
    sakila.actor
ORDER BY first_name , last_name
LIMIT 60) ORDER BY first_name , last_name LIMIT 15 OFFSET 45;
~~~
<br>
