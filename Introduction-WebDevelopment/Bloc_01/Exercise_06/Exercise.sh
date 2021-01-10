# Exercício 1
ps

# Exercício 2
sleep 30 &

# Exercício 3
ps | grep sleep
kill 1234 # se 1234 for o PID do processo criado no Exercício 2
# deve aparecer "terminated" no terminal

# Exercício 4
sleep 30
# aperte "ctrl+z" enquanto o processo está rodando
# deve aparecer "suspended" no terminal

# depois continue a execução usando o comando: bg
bg
# deve aparecer "continued" no terminal
# depois que passar os 30 segundos, deve aparecer "done" no terminal

# Exercício 5
sleep 300 &

# Exercício 6
sleep 200
# aperte "ctrl+z" enquanto o processo está rodando
# deve aparecer "suspended" no terminal
sleep 100
# aperte "ctrl+z" enquanto o processo está rodando
# deve aparecer "suspended" no terminal

# Exercício 7
jobs
# deve aparecer "running" à esquerda do processo sleep 300
fg %1 # trazendo o processo sleep 300 para foreground com o comando fg
# aperte "ctrl+z" enquanto o processo está rodando
# deve aparecer "suspended" no terminal
jobs
# todos os processos devem aparecer como "suspended"

# Exercício 8
bg %3 # executando o processo sleep 100 em background com o comando bg
jobs
# deve aparecer "running" à esquerda do processo sleep 100

# Exercício 9
ps | grep sleep
kill 1234 # assumindo que 1234 seja o PID de um dos processos sleep
kill 4567 # assumindo que 4567 seja o PID de um dos processos sleep
kill 7890 # assumindo que 7890 seja o PID de um dos processos sleep
# ou...
killall sleep