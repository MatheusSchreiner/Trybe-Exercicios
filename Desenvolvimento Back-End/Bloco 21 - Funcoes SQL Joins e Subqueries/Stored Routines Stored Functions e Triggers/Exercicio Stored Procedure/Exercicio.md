### 1. 
~~~
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowTop10Actors()
BEGIN
    SELECT actor_id, COUNT(*) AS 'quantidade de filmes'
    FROM film_actor
    GROUP BY actor_id
    ORDER BY COUNT(*) DESC
    LIMIT 10;
END $$

DELIMITER ;

-- Como usar:

CALL ShowTop10Actors();
~~~
<br>

### 2. 
~~~
USE sakila;
DELIMITER $$

CREATE PROCEDURE FindMovieByCategory(IN category VARCHAR(100))
BEGIN
    SELECT f.film_id, f.title, fc.category_id, c.name
    FROM sakila.film f
    INNER JOIN sakila.film_category fc ON f.film_id = fc.film_id
    INNER JOIN sakila.category c ON c.category_id = fc.category_id
    WHERE c.name = category;
END $$

DELIMITER ;

-- Como usar:

CALL FindMovieByCategory('Action');
~~~
<br>

### 3. 
~~~
USE sakila;
DELIMITER $$

CREATE PROCEDURE CheckIfActiveClient(
    IN client_email VARCHAR(200),
    OUT isActive BOOL
)
BEGIN
    SET isActive = (
        SELECT active
        FROM sakila.customer
        WHERE email = client_email
    );
END $$

DELIMITER ;

-- Como usar:

SELECT @ActiveStatus;
CALL CheckIfActiveClient('MARY.SMITH@sakilacustomer.org', @ActiveStatus);
SELECT @ActiveStatus;
~~~
<br>
