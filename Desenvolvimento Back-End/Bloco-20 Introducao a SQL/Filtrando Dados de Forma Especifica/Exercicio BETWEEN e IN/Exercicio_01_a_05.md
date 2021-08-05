### 1. 
~~~
USE sakila;
SELECT first_name, last_name, email FROM customer
WHERE last_name IN('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;
~~~
<br>

### 2. 
~~~
USE sakila;
SELECT email FROM customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email;
~~~
<br>

### 3. 
~~~
USE sakila;
SELECT COUNT(*) quantidade_de_pagamentos FROM payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';
~~~
<br>

### 4. 
~~~
USE sakila;
SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;
~~~
<br>

### 5. 
~~~
USE sakila;
SELECT title, rating FROM film
WHERE rating IN('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;
~~~
<br>
