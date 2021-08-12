### 1. 
~~~
db.superheroes.findOne();
~~~
<br>

### 2. 
~~~
db.superheroes.find(
    { "aspects.height": { $lt: 180 } }
).pretty();
~~~
<br>

### 3. 
~~~
db.superheroes.count(
    { "aspects.height": { $lt: 180 } }
);
~~~
<br>

### 4. 
~~~
db.superheroes.count(
    { "aspects.height": { $lt: 180 } }
);
~~~
<br>

### 5. 
~~~
db.superheroes.findOne(
    { "aspects.height": { $gte: 200 } }
);
~~~
<br>

### 6. 
~~~
db.superheroes.count(
    { "aspects.height": { $gte: 200 } }
);
~~~
<br>

### 7. 
~~~
db.superheroes.find(
    { "aspects.eyeColor": "green"}
);

ou

db.superheroes.find(
    { "aspects.eyeColor": { $eq: "green" } }
).pretty();
~~~
<br>

### 8. 
~~~
db.superheroes.count(
    { "aspects.eyeColor": "blue"}
);

ou

db.superheroes.count(
    { "aspects.eyeColor": { $eq: "blue" } }
);
~~~
<br>

### 9. 
~~~
db.superheroes.find(
    { "aspects.hairColor": { $in: ["black", "No Hair"] } }
).pretty();
~~~
<br>

### 10. 
~~~
db.superheroes.count(
    { "aspects.hairColor": { $in: ["black", "No Hair"] } }
);
~~~
<br>

### 11. 
~~~
db.superheroes.count(
    { "aspects.hairColor": { $nin: ["black", "No Hair"] } }
);
~~~
<br>

### 12. 
~~~
db.superheroes.count(
    { "aspects.height": { $not: { $gt: 180 } } }
);
~~~
<br>

### 13. 
~~~
db.superheroes.find({
  $nor: [
          { race: "Human" },
          { "aspects.height": { $gt: 180 } }
      ]
  }
).pretty();
~~~
<br>

### 14. 
~~~
db.superheroes.find({
  $and:[
    { $or: [{ "aspects.height": 180 }, { "aspects.height": 200 }]},
    { publisher: "Marvel Comics" }
  ]
}).pretty();
~~~
<br>

### 15. 
~~~
db.superheroes.find({
  $and: [
    { "aspects.weight": { $gte: 80, $lte: 100 }},
    { $or: [{ race: "Human" }, { race: "Mutant" }]},
    { publisher: { $ne: "DC Comics" }}
  ]
}).pretty();
~~~
<br>

### 16. 
~~~
db.superheroes.count({ race: { $exists: false } });

ou

db.superheroes.count({ race: { $exists: 0 } });
~~~
<br>

### 17. 
~~~
db.superheroes.count({ "aspects.hairColor": { $exists: 1 } });

ou

db.superheroes.count({ "aspects.hairColor": { $exists: true } });
~~~
<br>

### 18. 
~~~
db.superheroes.deleteOne(
    { publisher: "Sony Pictures" }
);
~~~
<br>

### 19. 
~~~
db.superheroes.deleteMany(
    { publisher: "George Lucas" }
);
~~~
<br>
