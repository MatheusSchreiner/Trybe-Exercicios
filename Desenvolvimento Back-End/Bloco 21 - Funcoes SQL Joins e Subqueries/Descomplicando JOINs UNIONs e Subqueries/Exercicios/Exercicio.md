### 1. 
~~~
USE Pixar;

SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id;
~~~
<br>

### 2. 
~~~
USE Pixar;

SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.international_sales > b.domestic_sales;
~~~
<br>

### 3. 
~~~
USE Pixar;

SELECT 
    m.title, b.rating
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
ORDER BY b.rating DESC;
~~~
<br>

### 4. 
~~~
USE Pixar;

SELECT 
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Theater t
        LEFT JOIN
    Movies m ON t.id = m.theater_id
ORDER BY t.name;
~~~
<br>

### 5. 
~~~
USE Pixar;

SELECT 
    t.id,
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Theater t
        RIGHT JOIN
    Movies m ON t.id = m.theater_id
ORDER BY t.name;
~~~
<br>

### 6. 
~~~
USE Pixar;

SELECT 
    title
FROM
    Movies
WHERE
    id IN (SELECT 
            movie_id
        FROM
            BoxOffice
        WHERE
            rating > 7.5);

OU Usando INNER JOIN

USE Pixar;

SELECT 
    m.title
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.rating > 7.5;
~~~
<br>

### 7. 
~~~
USE Pixar;

SELECT 
    rating
FROM
    BoxOffice
WHERE
    movie_id IN (SELECT 
            id
        FROM
            Movies
        WHERE
            year > 2009);

OU Usando INNER JOIN

USE Pixar;

SELECT 
    b.rating
FROM
    BoxOffice b
        INNER JOIN
    Movies m ON b.movie_id = m.id
WHERE
    m.year > 2009;
~~~
<br>

### 8. 
~~~
USE Pixar;

SELECT 
    t.name, t.location
FROM
    Theater AS t
WHERE
    EXISTS( SELECT 
            *
        FROM
            Movies
        WHERE
            Movies.theater_id = t.id);
~~~
<br>

### 9. 
~~~
USE Pixar;

SELECT 
    t.name, t.location
FROM
    Theater AS t
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            Movies
        WHERE
            Movies.theater_id = t.id);
~~~
<br>

### 10. 
~~~
USE Pixar;

SELECT 
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.rating > 8
        AND m.theater_id IS NOT NULL;
~~~
<br>


### 11. 
~~~
USE Pixar;

SELECT 
    t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM
    Movies t1,
    Movies t2
WHERE
    t1.director = t2.director
        AND t1.title <> t2.title;
~~~
<br>


### 12. 
~~~
USE Pixar;

SELECT 
    m.title
FROM
    Movies m
WHERE
    m.id IN (SELECT 
            b.movie_id
        FROM
            BoxOffice b
        WHERE
            b.international_sales >= 500000000)
        AND m.length_minutes > 110;

OU Usando INNER JOIN

USE Pixar;

SELECT 
    m.title
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.international_sales >= 500000000
        AND m.length_minutes > 110;
~~~
<br>
