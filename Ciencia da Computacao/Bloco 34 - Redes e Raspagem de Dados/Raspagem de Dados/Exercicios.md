### 1. 
~~~
import requests


response = requests.get("https://httpbin.org/encoding/utf8")
print(response.text)
~~~
<br>

### 2. 
~~~
import requests


response = requests.get("https://api.github.com/users")
users = response.json()
for user in users:
    print(f"user['login'] user['url']")
~~~
<br>

### 3. 
~~~
import requests


response = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Mozilla", "Accept": "text/html"},
)
assert "bot detected" not in response.text
~~~
<br>

### 4. 
~~~
import requests
import parsel

URL_BASE = "http://books.toscrape.com/catalogue/"
response = requests.get(URL_BASE + "the-grand-design_405/index.html")
selector = parsel.Selector(response.text)

title = selector.css("h1::text").get()

price = selector.css(".product_main > .price_color::text").re_first(r"\d*\.\d{2}")

description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]

cover = URL_BASE + selector.css("#product_gallery img::attr(src)").get()

print(title, price, description, cover, sep=",")
~~~
<br>

### 5. 
~~~
import requests
import parsel

URL_BASE = "http://books.toscrape.com/catalogue/"
response = requests.get(URL_BASE + "the-grand-design_405/index.html")
selector = parsel.Selector(response.text)

title = selector.css("h1::text").get()

price = selector.css(".product_main > .price_color::text").re_first(r"\d*\.\d{2}")

description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]

cover = URL_BASE + selector.css("#product_gallery img::attr(src)").get()
availability = selector.css(".product_main .availability::text").re_first("\d")

print(title, price, description, cover, availability, sep=",")
~~~
<br>

### 6. 
~~~
from pymongo import MongoClient


category = input("Escolha uma categoria: ")
with MongoClient() as client:
    db = client.library
    for book in db.books.find({"categories": category}, projection=["title"]):
        print(book["title"])
~~~
<br>

### 7. 
~~~
from pymongo import MongoClient


with MongoClient() as client:
    db = client.library
    pipelines = [
        {"$match": {"status": "PUBLISH"}},
        {"$unwind": "$categories"},
        {"$group": {"_id": "$categories", "count": {"$sum": 1}}},
        {"$sort": {"$count": -1}},
    ]
    for category in db.books.aggregate(pipelines):
        print(f"{category["id"]} {category["count"]}")
~~~
<br>

### 8. 
~~~
import requests
import parsel

URL_BASE = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"
response = requests.get(URL_BASE)
selector = parsel.Selector(response.text)
flags_url = selector.css(".gallerybox .image img::attr(src)").getall()
for url in flags_url:
    filename = url.split("/")[-1]
    image_content = requests.get(url).content
    with open(filename, "wb") as file:
        file.write(image_content)
~~~
<br>

### 9. 
~~~
import requests


has_next = True
page = 1
counter = 0
while has_next:
    response = requests.get(f"http://quotes.toscrape.com/api/quotes?page={page}")
    json_content = response.json()
    for quote in json_content["quotes"]:
        print(quote["text"])
        counter += 1
    has_next = json_content["has_next"]
    page = json_content["page"] + 1
print(counter)
~~~
