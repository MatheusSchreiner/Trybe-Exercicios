### 1. 
~~~
db.bios.find({"_id": 8});
~~~
<br>

### 2. 
~~~
db.bios.find({"_id": 8}, {_name: true });

OU

db.bios.find({"_id": 8}, {_id: true, name: true });

OU

db.bios.find({"_id": 8}, {_id: 1, name: 1 });
~~~
<br>

### 3. 
~~~
db.bios.find({"_id": 8}, {_id: 0, name: 1, birth: 1 });

OU

db.bios.find({"_id": 8}, {_id: false, name: true, birth: true });
~~~
<br>

### 4. 
~~~
db.bios.find({"name.first": "John"}).pretty();
~~~
<br>

### 5. 
~~~
db.bios.find().limit(3);
~~~
<br>

### 6. 
~~~
db.bios.find().limit(2).skip(5);
~~~
<br>

### 7. 
~~~
db.books.count()
~~~
<br>

### 8. 
~~~
db.books.count(
    { status: "PUBLISH" }
)
~~~
<br>

### 9. 
~~~
db.books.find(
    {},
    {
        _id: 0,
        title: 1,
        isbn: 1,
        pageCount: 1
    }
).limit(3).pretty()
~~~
<br>

### 10. 
~~~
db.books.find(
    {
        status: "MEAP"
    },
    {
        title: 1,
        authors: 1,
        status: 1
    }
).skip(5).limit(10).pretty()
~~~
<br>
