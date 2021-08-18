### 1. 
~~~
db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      quant: { $sum: 1 }
    },
  },
]);
~~~
<br>

### 2. 
~~~
db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      valueTotal: { $sum: "$value" },
      transcoes: { $sum: 1 },
    },
  },
]);
~~~
<br>

### 3. 
~~~
db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      total: { $sum: "$value" },
    },
  },
]);
~~~
<br>

### 4. 
~~~
db.transactions.aggregate([
  {
    $match: {
      value: { $gt: 1000 },
    },
  },
  {
    $group: {
      _id: '$bank',
      total: { $sum: '$value' },
    }
  }
]);
~~~
<br>
