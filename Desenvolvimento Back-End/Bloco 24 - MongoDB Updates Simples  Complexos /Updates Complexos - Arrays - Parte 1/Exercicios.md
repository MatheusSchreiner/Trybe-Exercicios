### 1. 
~~~
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: { 
      category: "superhero",
    }, 
  },
);
~~~
<br>

### 2. 
~~~
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      category: { $each: ["vilain", "comic-based"] },
    }, 
  },
);
~~~
<br>

### 3. 
~~~
db.movies.updateOne(
  { title: "Batman" },
  {
    $pull: {
      category: "action", 
    }, 
  },
);
~~~
<br>

### 4. 
~~~
db.movies.updateOne(
  { title: "Batman" },
  {
    $pop: {
      category: -1, 
    }, 
  },
);
~~~
<br>

### 5. 
~~~
db.movies.updateOne(
  { title: "Batman" },
  {
    $pop: {
      category: 1, 
    }, 
  },
);
~~~
<br>

### 6. 
~~~
db.movies.updateOne(
  { title: "Batman" },
  {
    $addToSet: {
      category: "action", 
    }, 
  },
);
~~~
<br>

### 7. 
~~~
db.movies.updateMany(
  { $or: [
    { title: "Batman"},
    { title: "Home Alone" }
    ],
  },
  {
    $addToSet: {
      category: "90's", 
    }, 
  },
);

ou

db.movies.updateMany(
  {
    title: {
      $in: ["Batman", "Home Alone"],
    },
  },
  {
    $push: { category: "90's" },
  },
);
~~~
<br>

### 8. 
~~~
db.movies.updateOne(
  { title: "Home Alone" },
  {
    $push: {
      cast: {
        $each: [
          {
            "actor": "Macaulay Culkin",
            "character": "Kevin"
          },
          {
            "actor": "Joe Pesci",
            "character": "Harry"
          },
          {
            "actor": "Daniel Stern"
          }
        ],
      }, 
    }, 
  },
);
~~~
<br>

### 9. 
~~~
db.movies.updateOne(
  {
    title: "Home Alone",
    "cast.actor": "Daniel Stern",
  },
  {
    $set: { "cast.$.character": "Marv" },
  },
);
~~~
<br>

### 10. 
~~~
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      cast: {
        $each: [
          {
            "character": "Batman",
          },
          {
            "character": "Alfred",
          },
          {
            "character": "Coringa",
          },
        ],
      },
    },
  },
);
~~~
<br>

### 11. 
~~~
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Batman",
  },
  {
    $push: { "cast.$.actor": "Christian Bale" },
  },
);

db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Alfred",
  },
  {
    $push: { "cast.$.actor": "Michael Caine" },
  },
);

db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Coringa",
  },
  {
    $push: { "cast.$.actor": "Heath Ledger" },
  },
);
~~~
<br>

### 12. 
~~~
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Batman",
  },
  {
    $push: {
      "cast.$.actor": {
        $each: ["Michael Keaton", "Val Kilmer", "George Clooney"],
        $sort: 1,
      },
    },
  },
);
~~~
<br>
