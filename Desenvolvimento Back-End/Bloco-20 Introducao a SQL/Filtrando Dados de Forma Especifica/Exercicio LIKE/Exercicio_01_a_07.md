### 1. 
~~~
USE sakila;
SELECT * FROM film
WHERE title LIKE '%ace%';
~~~
<br>

### 2. 
~~~
USE sakila;
SELECT * FROM film
WHERE description LIKE '%china';
~~~
<br>

### 3. 
~~~
USE sakila;
SELECT * FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord';
~~~
<br>

### 4. 
~~~
USE sakila;
SELECT * FROM film
WHERE title LIKE '___gon%';
~~~
<br>

### 5. 
~~~
USE sakila;
SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';
~~~
<br>

### 6. 
~~~
USE sakila;
SELECT * FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
~~~
<br>

### 7. 
~~~
USE sakila;
SELECT * FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';
~~~
<br>
