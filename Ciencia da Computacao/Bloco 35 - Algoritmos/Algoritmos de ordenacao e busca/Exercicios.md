### 1. 
~~~
["elefante", "arara", "javali" ,"macaco","zebra"]
~~~
<br>

### 2. 
~~~
 7   3    5    4    6    8    2    1
 37    4 5    6 8    1 2
 34 5 7    1 2 6 8
 12 3 4 5 6 7 8
~~~
<br>

### 3. 
~~~
from random import shuffle
from random import shuffle
from Cronometro import Cronometro


def selection_sort(array):
    for i in range(len(array)):
        minimum = i

        for j in range(i + 1, len(array)):
            if array[j] < array[minimum]:
                minimum = j

        array[minimum], array[i] = array[i], array[minimum]

    return array


def insertion_sort(array):
    for i in range(len(array)):

        current_value = array[i]
        current_position = i

        while (
            current_position > 0
            and array[current_position - 1] > current_value
        ):
            array[current_position] = array[current_position - 1]
            current_position = current_position - 1

        array[current_position] = current_value

    return array


for algorithm in (insertion_sort, selection_sort):
    algorithm_name = algorithm.__name__

    for input in (10_000, 100_000, 1_000_000):

        sorted_numbers = list(range(input))
        reversed_sorted_numbers = list(reversed(sorted_numbers))
        random_numbers = sorted_numbers[:]  # copia dos ordenados
        shuffle(random_numbers)  # embaralha eles

        with Cronometro(f"{algorithm_name} com entrada" +
                        f"ordenada de {input} números"):
            algorithm(sorted_numbers)

        with Cronometro(f"{algorithm_name} com entrada" +
                        f"inversamente ordenada de {input} números"):
            algorithm(reversed_sorted_numbers)

        with Cronometro(f"{algorithm_name} com entrada" +
                        f"aleatória de {input} números"):
            algorithm(random_numbers)

        print("*" * 50)
~~~
<br>

### 4. 
~~~
from random import shuffle
from Cronometro import Cronometro


def bubble_sort(array):
    has_swapped = True
    num_of_iterations = 0

    while has_swapped:
        has_swapped = False

        for i in range(len(array) - num_of_iterations - 1):
            if array[i] > array[i + 1]:
                array[i], array[i + 1] = array[i + 1], array[i]
                has_swapped = True
        num_of_iterations += 1

    return array


def merge_sort(array):
    if len(array) <= 1:
        return array

    mid = len(array) // 2
    left, right = merge_sort(array[:mid]), merge_sort(array[mid:])

    return merge(left, right, array.copy())


def merge(left, right, merged):
    left_cursor, right_cursor = 0, 0

    while left_cursor < len(left) and right_cursor < len(right):

        if left[left_cursor] <= right[right_cursor]:
            merged[left_cursor + right_cursor] = left[left_cursor]
            left_cursor += 1
        else:
            merged[left_cursor + right_cursor] = right[right_cursor]
            right_cursor += 1

    for left_cursor in range(left_cursor, len(left)):
        merged[left_cursor + right_cursor] = left[left_cursor]

    for right_cursor in range(right_cursor, len(right)):
        merged[left_cursor + right_cursor] = right[right_cursor]

    return merged


for algorithm in (bubble_sort, merge_sort):
    algorithm_name = algorithm.__name__

    numbers = list(range(10_000))
    shuffle(numbers)

    with Cronometro(algorithm_name):
        algorithm(numbers)
~~~
<br>

### 5. 
~~~
def binary_search(array, value):

    low_index = 0
    high_index = len(array) - 1

    while high_index >= low_index:

        middle_index = (high_index + low_index) // 2
        if array[middle_index] == value:
            return middle_index
        elif array[middle_index] > value:
            high_index = middle_index - 1
        else:
            low_index = middle_index + 1

    raise ValueError(f"{value} is not in list")


array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
target = 10

print(binary_search(array, target))
~~~
<br>

### 6. 
~~~
def find_first_bad_version(array):
    low_index = 0
    high_index = len(array) - 1

    while high_index >= low_index:

        middle_index = (high_index + low_index) // 2

        if array[middle_index] is False:
            high_index = middle_index - 1
        else:
            low_index = middle_index + 1

    return low_index


array1 = [True, True, True, True, False, False, False]
array2 = [True, True, False, False, False, False, False]

print("Saída array1:", find_first_bad_version(array1))
print("Saída array2:", find_first_bad_version(array2))
~~~
