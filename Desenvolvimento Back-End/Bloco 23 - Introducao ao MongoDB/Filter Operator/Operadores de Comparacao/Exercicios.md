### 1. 
~~~
db.restaurants.find({ "borough": { $in: ["Queens", "Staten Island", "Bronx"]}}).count();
~~~
<br>

### 2. 
~~~
db.restaurants.find({ cuisine: { $ne: "American" } }).count();

ou

db.restaurants.find({ "cuisine": { $nin: ["American"]}}).count();
~~~
<br>

### 3. 
~~~
db.restaurants.find({ "rating": { $gte: 8 } }).count();
~~~
<br>

### 4. 
~~~
db.restaurants.find({ "rating": { $lt: 4 } }).count();
~~~
<br>

### 5. 
~~~
db.restaurants.find({ "rating": { $nin: [5, 6, 7] } }).count();
~~~
<br>
