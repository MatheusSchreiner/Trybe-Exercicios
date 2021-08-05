### 1. 
~~~
SELECT 
    A.actor_id, A.first_name, F.film_id
FROM
    sakila.actor AS A
        INNER JOIN
    sakila.film_actor AS F ON A.actor_id = F.actor_id;
~~~
<br>

### 2. 
~~~
SELECT 
    first_name, last_name, address
FROM
    sakila.staff AS S
        INNER JOIN
    sakila.address AS A ON S.address_id = A.address_id;
~~~
<br>

### 3. 
~~~
SELECT 
    C.customer_id,
    C.first_name,
    C.email,
    C.address_id,
    A.address
FROM
    sakila.customer AS C
        INNER JOIN
    sakila.address AS A ON C.address_id = A.address_id
ORDER BY C.first_name DESC
LIMIT 100;
~~~
<br>

### 4. 
~~~
SELECT 
    C.first_name, C.email, C.address_id, A.address, A.district
FROM
    sakila.customer AS C
        INNER JOIN
    sakila.address AS A ON C.address_id = A.address_id
WHERE
    A.district = 'California'
        AND C.first_name LIKE '%rene%';
~~~
<br>

### 5. 
~~~
SELECT 
    c.first_name, COUNT(a.address) AS `quantidade de endereço`
FROM
    sakila.customer c
        INNER JOIN
    sakila.address AS a ON a.address_id = c.address_id
WHERE
    c.active = 1
GROUP BY c.first_name
ORDER BY first_name DESC;
~~~
<br>

### 6. 
~~~
SELECT 
    stf.first_name,
    stf.last_name,
    AVG(pay.amount) AS `Média de pagamento`
FROM
    sakila.staff AS stf
        INNER JOIN
    sakila.payment pay ON stf.staff_id = pay.staff_id
WHERE
    YEAR(pay.payment_date) = 2006
GROUP BY stf.first_name , stf.last_name;
~~~
<br>

### 7. 
~~~
SELECT 
    A.actor_id, A.first_name, F.film_id, F.title
FROM
    sakila.actor AS A
        INNER JOIN
    sakila.film_actor AS FA ON A.actor_id = FA.actor_id
        INNER JOIN
    sakila.film AS F ON F.film_id = FA.film_id;
~~~
<br>
