### 1. 
~~~
def which_number_is_bigger(num1, num2):
  if num1 > num2:
    return num1
  return num2

ou

def which_number_is_bigger(num1, num2):
  return  max(num1, num2)
~~~
<br>

### 2. 
~~~
def average(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)

ou

def average(numbers):
  return (sum(numbers) / len(numbers))
~~~
<br>

### 3. 
~~~
def draw_square(n):
    for row in range(n):
        print(n * '*')
~~~
<br>

### 4. 
~~~
def find_biggest_name(names):
  biggest_name = names[0]
  for name in names:
    if len(name) > len(biggest_name):
      biggest_name = name
  return biggest_name
~~~
<br>

### 5. 
~~~
def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price
~~~
<br>

### 6. 
~~~
def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"
~~~
<br>
