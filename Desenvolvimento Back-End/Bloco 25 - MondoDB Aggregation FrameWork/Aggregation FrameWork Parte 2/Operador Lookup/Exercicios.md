### 1. 
~~~
use('agg_example');
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      let: { user_name: "$name" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$from", "$$user_name"],
            }
          }
        }
      ],
      as: "transactions"
    }
  }
]);
~~~
<br>

### 2. 
~~~
use('agg_example');
db.clients.aggregate([
  {
lookup: {
      from: "transactions",
      let: { user_name: "$name" },
      pipeline: [
        {
match: {
expr: {
eq: ["$to", "$$user_name"],
            }
          }
        }
      ],
      as: "received_transactions"
    }
  },
  {
sort: { State: 1 }
  },
  {
limit: 4
  }
]);
~~~
<br>

### 3. 
~~~
use('agg_example');
db.clients.aggregate([
  {
match: { State: "Florida" }
  },
  {
lookup: {
      from: "transactions",
      let: { user_name: "$name"},
      pipeline: [
        {
match: {
expr: {
eq: ["$to", "$$user_name"],
            }
          }
        }
      ],
      as: "received_transactions"
    }
  },
]);
~~~
<br>
