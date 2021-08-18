### 1. 
~~~
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "transactios_history"
    },
  },
]);
~~~
<br>

### 2. 
~~~
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactios_history"
    },
  },
  {
    $limit: 4,
  },
]);
~~~
<br>

### 3. 
~~~
db.clients.aggregate([
  {
    $match: { State: "Florida" }
  },
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactios_history"
    },
  },
]);
~~~
<br>
