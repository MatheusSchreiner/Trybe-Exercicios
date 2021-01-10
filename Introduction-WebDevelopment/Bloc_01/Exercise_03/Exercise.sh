# exercício 1
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# exercício 2
cat countries.txt

# exercício 3
less countries.txt

# ou...
more countries.txt

# exercício 4
less countries.txt

# ou...
more countries.txt
# agora que você está dentro do arquivo, digite uma barra `/` e em seguida a palavra Zambia
# /Zambia
# pressione "Enter" para sair

# exercício 5
grep Brazil countries.txt

# exercício 6
grep -i brazil countries.txt

# exercício 7
grep -v fox phrases.txt

# exercício 8
wc -w phrases.txt

# exercício 9
wc -l phrases.txt

# exercício 10
touch empty.tbt
touch empty.pdf

# exercício 11
ls -l

# exercício 12
ls -l *txt

# exercício 13
ls -l *t?t

# exercício 14
man ls