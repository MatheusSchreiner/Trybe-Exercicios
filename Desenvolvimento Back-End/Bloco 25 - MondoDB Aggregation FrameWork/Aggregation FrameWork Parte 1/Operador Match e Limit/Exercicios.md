### 1. 
~~~
db.transactions.aggregate([
  { $match: { from: "Dave America" } }
])
~~~
<br>

### 2. 
~~~
db.transactions.aggregate([
  { 
    $match: { 
      $or:
      [
        { value: { $gt: 700, $lt: 6000 } },
        { to: "Lisa Simpson" },
      ],
    },
  },
]);
~~~
<br>

### 3. 
~~~
db.transactions.aggregate([
  { $match: { value: { $gt: 1000 } } },
  { $limit: 3 }
]);
~~~
<br>
