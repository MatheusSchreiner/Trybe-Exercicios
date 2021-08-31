### 1. 
~~~
db.movies.find(
  { category: { $all: ['action', 'adventure'] } }
);
~~~
<br>

### 2. 
~~~
db.movies.find(
  { category: { $all: ['action'] }, imdbRating: { $gt: 7 } }
);

ou

db.movies.find(
  { category: 'action', imdbRating: { $gt: 7 } }
);
~~~
<br>

### 3. 
~~~
db.movies.updateOne(
  { title: 'Batman' },
  { $set: { ratings: [85, 100, 102, 105] } }
);

ou

db.movies.updateOne(
  { title: 'Batman' },
  { $push: { ratings: { $each: [85, 100, 102, 105] } } }
);
~~~
<br>

### 4. 
~~~
db.movies.updateOne(
  { title: "Godzilla" },
  { $push: { ratings: { $each: [78, 52, 95, 102] } } }
);
~~~
<br>

### 5. 
~~~
db.movies.updateOne(
  { title: 'Home Alone' },
  { $push: { ratings: { $each: [200, 99, 65] } } }
);
~~~
<br>

### 6. 
~~~
db.movies.find(
  { ratings: { $elemMatch: { $gt: 103 } } },
  { _id: 0, title: 1, ratings: 1 }
);
~~~
<br>

### 7. 
~~~
db.movies.find(
  { ratings: { $elemMatch: { $gt: 100, $lt: 105 } } },
  { _id: 0, title: 1, ratings: 1 }
);
~~~
<br>

### 8. 
~~~
db.movies.find(
  { ratings: { $elemMatch: { $gt: 64, $lt: 105, $mod: [9, 0] } } },
  { _id: 0, title: 1, ratings: 1 }
);
~~~
<br>

### 9. 
~~~
db.movies.find(
  { category: { $all: ['adventure'] }, 
    ratings: { $elemMatch: { $gt: 103 } } },
  { _id: 0, title: 1, ratings: 1 }
);

ou

db.movies.find(
  { category: 'adventure', ratings: { $gt: 103 } },
  { _id: 0, title: 1, ratings: 1 }
);
~~~
<br>

### 10. 
~~~
db.movies.find(
  { category: { $size: 2 } },
  { _id: 0, title: 1 }
);
~~~
<br>

### 11. 
~~~
db.movies.find(
  { ratings: { $size: 4 } },
  { _id: 0, title: 1 }
);
~~~
<br>

### 12. 
~~~
db.movies.find(
  { category: { $size: 2 },
    budget: { $mod: [5, 0] }
  }
);
~~~
<br>

### 13. 
~~~
db.movies.find(
  { $or: [{ category: 'sci-fi' }, { ratings: { $gt: 199 } }] },
  { _id: 0, title: 1, ratings: 1, category: 1 }
);

ou

db.movies.find(
  { $or: [ 
    { category: { $all: ["sci-fi"] } },
    { ratings: { $elemMatch: { $gt: 199 } } }
  ] },
  { _id: 0, title: 1, ratings: 1, category: 1 }
);
~~~
<br>

### 14. 
~~~
db.movies.find(
  { ratings: { $size: 4 }, 
    category: { $in: ['adventure', 'family'] },
    imdbRating: { $gte: 7 }
  }
);

ou

db.movies.find({ $and: [
  { ratings: { $size: 4 } },
  { category: { $in: ["adventure", "family"] } },
  { imdbRating: { $not: { $lt: 7 } }}
]});
~~~
<br>

### 15. 
~~~
db.movies.updateOne(
  { title: "Batman" },
  {
    $set: {
      description: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
    }
  }
);
~~~
<br>

### 16. 
~~~
db.movies.updateOne(
  { title: "Godzilla" },
  {
    $set: {
      description: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."
    }
  }
);
~~~
<br>

### 17. 
~~~
db.movies.updateOne(
  { title: "Home Alone" },
  {
    $set: {
      description: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
    }
  }
);
~~~
<br>

### 18. 
~~~
db.movies.find(
  { description: { $regex: /^The/ } }
);
~~~
<br>

### 19. 
~~~
db.movies.find(
  { description: { $regex: /humanity.$/ } }
);
~~~
<br>

### 20. 
~~~
db.movies.createIndex({ description: 'text' });
~~~
<br>

### 21. 
~~~
db.movies.find(
  { $text: { $search: "vacation" } },
  { score: { $meta: 'textScore' } }
);
~~~
<br>

### 22. 
~~~
db.movies.find(
  { $text: { $search: "monstrous criminal" } },
  { score: { $meta: 'textScore' } }
);
~~~
<br>

### 23. 
~~~
db.movies.find(
  { $text: { $search: "\"when he is accidentally\"" } },
  { score: { $meta: 'textScore' } }
);
~~~
<br>
