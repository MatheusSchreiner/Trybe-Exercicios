### 1. 
~~~
db.restaurants.find({ rating: { $not: { $lte: 5 } }}).count();
~~~
<br>

### 2. 
~~~
db.restaurants.find({ $or: [{ rating: { $gte: 6 } }, { borough: "Brooklyn" }] }).count();
~~~
<br>

### 3. 
~~~
db.restaurants.find({
$and: [
      { borough: { $in: ['Queens', 'Staten Island', 'Brooklyn'] } },
      { rating: { $gt: 4 } },
    ],
  }).count();
~~~
<br>

### 4. 
~~~
db.restaurants.find({ $nor: [{ rating: { $eq: 1 } }, { cuisine: "American" }] }).count();

ou

db.restaurants.find({ $nor: [{ rating: 1 }, { cuisine: "American" }] }).count();
~~~
<br>

### 5. 
~~~
db.restaurants.find({
$and: [
      { $or: [{ rating: { $gt: 6, $lt: 10 } }] },
      { $or: [{ borough: 'Brooklyn' }, { cuisine: { $ne: 'Delicatessen' } }] },
    ],
  }).count();
~~~
<br>
