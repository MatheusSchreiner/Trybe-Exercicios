### 1. 
~~~
SELECT MAX(SALARY)
FROM hr.employees;
~~~
<br>

### 2. 
~~~
SELECT  MAX(SALARY) - MIN(SALARY)
FROM hr.employees;
~~~
<br>

### 3. 
~~~
SELECT  JOB_ID, AVG(SALARY) AS 'average_salary'
FROM hr.employees
GROUP BY JOB_ID
ORDER BY `average_salary` DESC;
~~~
<br>

### 4. 
~~~
SELECT SUM(SALARY)
FROM hr.employees;
~~~
<br>

### 5. 
~~~
SELECT MAX(SALARY),
    MIN(SALARY),
  SUM(SALARY),
    ROUND(AVG(SALARY), 2)
FROM hr.employees;
~~~
<br>

### 6. 
~~~
SELECT JOB_ID , COUNT(*) AS 'total'
FROM hr.employees
WHERE JOB_ID = "IT_PROG";
~~~
<br>

### 7. 
~~~
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID;
~~~
<br>

### 8. 
~~~
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = "IT_PROG";
~~~
<br>

### 9. 
~~~
SELECT job_id, AVG(salary) 'average_salary'
FROM hr.employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id
ORDER BY `average_salary` DESC;
~~~
<br>

### 10. 
~~~
SELECT department_id,
    AVG(salary) 'average_salary' ,
    COUNT(*) 'number_of_employees'
FROM hr.employees
GROUP BY department_id
HAVING `number_of_employees` > 10;
~~~
<br>

### 11. 
~~~
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';
~~~
<br>

### 12. 
~~~
SELECT *
FROM hr.employees
WHERE LENGTH(first_name) >= 8;
~~~
<br>

### 13. 
~~~
SELECT employee_id, first_name,
    LEFT(hire_date, 4) 'hire_year'
FROM hr.employees;
-- OR
SELECT employee_id, first_name,
    MID(hire_date, 1, 4) 'hire_year'
FROM hr.employees;
~~~
<br>

### 14. 
~~~
SELECT employee_id, first_name,
    RIGHT(hire_date, 2) 'hire_day'
FROM hr.employees;
-- OR
SELECT employee_id, first_name,
    MID(hire_date, 9, 2) 'hire_day'
FROM hr.employees;
-- OR
SELECT employee_id, first_name,
    DAY(hire_date) 'hire_day'
FROM hr.employees;
~~~
<br>

### 15. 
~~~
SELECT employee_id, first_name,
    SUBSTRING(hire_date, 6, 2) 'hire_month'
FROM hr.employees;
-- OR
SELECT employee_id, first_name,
    MONTH(hire_date) 'hire_month'
FROM hr.employees;
~~~
<br>

### 16. 
~~~
SELECT UPPER(CONCAT(FIRST_NAME, " ", LAST_NAME))
FROM hr.employees;
~~~
<br>

### 17. 
~~~
SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE HIRE_DATE  BETWEEN '1987-07-01'  AND '1987-07-31';

SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE MONTH(HIRE_DATE)=7 and YEAR(HIRE_DATE)=1987;
~~~
<br>

### 18. 
~~~
SELECT first_name,
    last_name,
    DATEDIFF(CURRENT_DATE() , HIRE_DATE) 'days_worked'
FROM hr.employees;
~~~
<br>
