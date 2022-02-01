### 1. 
~~~
class MainMemory:
    def __init__(self):
        self.clean()

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        try:
            return float(self.loaded_memory[index])
        except IndexError:
            return 0

    def clean(self):
        self.loaded_memory = []

from os import mkdir, listdir
from os.path import join
from shutil import rmtree

DISK_PATH = "./disk"


class SecondaryMemory:
    def __init__(self, disk_path=DISK_PATH):
        self.disk_path = disk_path
        try:
            mkdir(self.disk_path)
        except FileExistsError:
            pass

    def load(self, value):
        value = str(value)
        next_index = str(len(listdir(self.disk_path)))
        next_file_name = join(self.disk_path, next_index)
        with open(next_file_name, "w", encoding="UTF-8") as file:
            file.write(value)

    def get(self, index):
        index = str(index)
        file_name = join(self.disk_path, index)
        with open(file_name) as file:
            return float(file.read())

    def clean(self):
        rmtree(self.disk_path)
        mkdir(self.disk_path)


from time import perf_counter

from main_memory import MainMemory
from secondary_memory import SecondaryMemory

main = MainMemory()
secondary = SecondaryMemory()

# Numeros aleatórios a serem somados
RANDOM_NUMBERS = ["36912", "84300"] * 100

def timer(string, initial_time):
    """Função auxiliar para print temporizado"""
    print(string)
    print(f"Tempo para a tarefa terminar: {perf_counter() - initial_time:6f}\n")


# Desempenho da memória primária
main_load_init_time = perf_counter()
for number in RANDOM_NUMBERS:
    main.load(number)
timer("Números carregados na memória principal", main_load_init_time)

main_get_init_time = perf_counter()
main_sum = sum([main.get(i) for i in range(len(RANDOM_NUMBERS))])
timer(f"Soma na memória principal: {main_sum}", main_get_init_time)

main_clean_init_time = perf_counter()
main.clean()
timer("Clean na memória principal", main_clean_init_time)


# Desempenho da memória secundária
secondary_load_initial_time = perf_counter()
for number in RANDOM_NUMBERS:
    secondary.load(number)
timer("Números carregados na memória secundária", secondary_load_initial_time)

secondary_get_init_time = perf_counter()
secondary_sum = sum([secondary.get(i) for i in range(len(RANDOM_NUMBERS))])
timer(f"Soma na memória secundária: {secondary_sum}", secondary_get_init_time)

secondary_clean_init_time = perf_counter()
secondary.clean()
timer("Clean na memória secundária", secondary_clean_init_time)
~~~
<br>

### 2. 
~~~
import platform

print(
    f"Plataforma: {platform.system()}\n"
    f"Versão: {platform.release()}"
    f"Arquitetura: {platform.architecture()[0]}\n"
)
~~~
<br>

### 3. 
~~~
from subprocess import check_output

# Processador
cpu_information = check_output("lscpu").decode("UTF-8").split("\n")
desired_cpu_information = {
    "model name": "Modelo",
    "cpu(s)": "Cores",
    "cpu mhz": "Velocidade (MHz)",
    "l1d": "Cache L1d",
    "l1i": "Cache L1i",
    "l2": "Cache L2",
    "l3": "Cache L3",
}
for desired_name, desired_description in desired_cpu_information.items():
    for information in cpu_information:
        if information.lower().startswith(desired_name):
            information = information.split("  ")  # 2 blank spaces
            information = information[-1].strip()
            print(f"{desired_description}: {information}")

# Memória
memory_information = [
    information
    for information in check_output("free")
    .decode("UTF-8")
    .split("\n")[1]
    .split(" ")
    if information != ""
]
total_memory = int(memory_information[1]) / 1000
used_memory = int(memory_information[2]) / 1000
print(
    f"Memória total: {total_memory:.0f}MB\n"
    f"Memória utilizada: {used_memory:.0f}MB"
)
~~~
<br>

### 4. 
~~~
from subprocess import check_output
from time import sleep


while True:
    memory_information = [
        information
        for information in check_output("free")
        .decode("UTF-8")
        .split("\n")[1]
        .split(" ")
        if information != ""
    ]
    total_memory = int(memory_information[1]) / 1000
    used_memory = int(memory_information[2]) / 1000
    print(
        f"\nMemória total: {total_memory:.0f}MB\n"
        f"Memória utilizada: {used_memory:.0f}MB"
    )
    sleep(1)
~~~
<br>

### 5. 
~~~
from time import sleep
from os import getpid


print(getpid())
sleep(20)

terminal: ps aux | grep <PROCESS ID>
~~~
