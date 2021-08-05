### 1. 
~~~
SELECT 
    id, title
FROM
    hotel.Books AS b
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            hotel.Books_Lent
        WHERE
            b.Id = book_id);
~~~
<br>

### 2. 
~~~
SELECT 
    id, title
FROM
    hotel.Books b
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.Books_Lent
        WHERE
            b.Id = book_id AND b.title LIKE '%lost%');
~~~
<br>

### 3. 
~~~
SELECT 
    name
FROM
    hotel.Customers c
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            customerid = c.customerid);
~~~
<br>

### 4. 
~~~
SELECT 
    cus.name, car.name
FROM
    hotel.Cars AS car
        INNER JOIN
    hotel.Customers AS cus
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerID = cus.CustomerId
                AND carID = car.ID);
~~~
<br>
