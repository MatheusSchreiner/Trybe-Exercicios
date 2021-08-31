### 1. 
~~~
db.movies.updateOne(
  { title: 'Batman' },
  { 
    $set: { 
      imdbRating: 7.7 
    }, 
  },
);
~~~
<br>

### 2. 
~~~
db.movies.updateOne(
  { title: 'Godzilla' },
  { 
    $set: { 
      budget: 1 
    },
  },
);
~~~
<br>

### 3. 
~~~
db.movies.updateOne(
  { title: 'Home Alone' },
  { 
    $set: { 
      imdbRating: 15, 
      budget: 5.5, 
    },
  },
);
~~~
<br>

### 4. 
~~~
db.movies.updateOne(
  { title: 'Batman' },
  { 
    $inc: { 
      imdbRating: 2
    },
  },
);
~~~
<br>

### 5. 
~~~
db.movies.updateOne(
  { title: 'Home Alone' },
  { 
    $inc: { 
      budget: 5
    },
  },
);
~~~
<br>

### 6. 
~~~
db.movies.updateOne(
  { title: 'Batman' },
  { 
    $mul: { 
      imdbRating: 4
    },
  },
);
~~~
<br>

### 7. 
~~~
db.movies.updateOne(
  { title: 'Batman' },
  { 
    $rename: { 
      budget: 'estimateBudget'
    },
  },
);
~~~
<br>

### 8. 
~~~
db.movies.updateOne(
  { title: 'Home Alone' },
  { 
    $min: { 
      budget: 5
    },
  },
);
~~~
<br>

### 9. 
~~~
db.movies.updateOne(
  { title: 'Godzilla' },
  { 
    $max: { 
      imdbRating: 8.6
    },
    $set: {
      'category.1': 'thriller'
    }
  },
);
~~~
<br>

### 10. 
~~~
db.movies.updateOne(
  { title: 'Home Alone' },
  { 
    $currentDate: { 
      lastUpdated: { 
        $type: "timestamp" 
      },
    },
  },
);
~~~
<br>

### 11. 
~~~
db.movies.updateMany(
  {},
  { 
    $set: {
      sequels: 0
    },
  },
);
~~~
<br>

### 12. 
~~~
db.movies.updateMany(
  {},
  { 
    $unset: {
      budget: '',
      estimateBudget: '',
    },
  },
);
~~~
<br>

### 13. 
~~~
db.movies.updateMany(
  { 
    $or: [
      { title: 'Batman' },
      { title: 'Home Alone' }
    ],
  },
  { 
    $max: {
      imdbRating: 17
    },
  },
);
~~~
<br>

### 14. 
~~~
db.xmen.updateMany(
  { class: "unknown" },
  {
    $currentDate: { 
      lastUpdate: { $type: "timestamp" } 
    },
    $unset: { 
      class: "" 
    },
  },
);
~~~
<br>

### 15.
~~~
db.xmen.updateMany(
  {},
  {
    $currentDate: {
      lastUpdate: {
        $type: "timestamp"
      },
    },
    $rename: {
      name: "hero_name",
      true_name: "full_name",
    },
    $set: {
      power: 100
    },
  },
);
~~~
<br>

### 16. 
~~~
db.xmen.updateMany(
  { $or: [
      { class: 'omega'},
      { class: 'gama' },
    ], 
  },
  {
    $currentDate: {
      lastUpdate: {
        $type: "timestamp"
      },
    },
    $max: {
      power: 500
    },
  },
);
~~~
<br>

### 17. 
~~~
db.xmen.updateMany(
  { class: 'gama' },
  {
    $currentDate: {
      lastUpdate: {
        $type: "timestamp"
      },
    },
    $min: {
      power: 300
    },
  },
);
~~~
<br>

### 18. 
~~~
db.xmen.updateMany(
  { class: { $exists: false } },
  {
    $currentDate: {
      lastUpdate: {
        $type: "timestamp"
      },
    },
    $inc: {
      power: -100
    },
  },
);
~~~
<br>

### 19. 
~~~
db.xmen.updateMany(
  { $or: [
      { occupation: 'Senior Staff',   power: { $gt: 100 } },
      { occupation: 'Junior Staff',
      power: { $gt: 200 } }
    ],
  },
  {
    $currentDate: {
      lastUpdate: {
        $type: "timestamp"
      },
    },
    $set: {
      areas: ["Students Room"],
    },
  },
);
~~~
<br>

### 20. 
~~~
db.xmen.updateMany(
  { $and:
    [
      { occupation: "Junior Staff" }, 
      { areas: { $exists: false } },
    ],
  },
  { 
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $set: {
      areas: ["Outside"],
    },
  },
);
~~~
<br>
