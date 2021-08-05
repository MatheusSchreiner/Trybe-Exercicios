# Exercício 1
# O comando para navegar é o: cd
# O caminho utilizado em conjunto com o comando vai depender de qual pasta
# você estiver e de onde a pasta unix_tests estiver.
# Use o comando pwd para verificar em qual pasta você está.
# Dessa forma, você confirmará se está na pasta unix_tests.

cd /home/joaozinho/unix_tests
pwd

# Exercício 2
touch skills2.txt
echo "Internet" >> skills2.txt
echo "Unix" >> skills2.txt
echo "Bash" >> skills2.txt

# Exercício 3
echo "HTML" >> skills2.txt
echo "CSS" >> skills2.txt
echo "JavaScript" >> skills2.txt
echo "React" >> skills2.txt
echo "SQL" >> skills2.txt
sort < skills2.txt

# Exercício 4
cat skills2.txt | wc -l

# Exercício 5
sort < skills2.txt | head -n 3 > top_skills.txt

# Exercício 6
touch phrases2.txt
echo "The quick brown fox jumps over the lazy dog." > phrases2.txt
echo "Quick fox jumps nightly above wizard." >> phrases2.txt
echo "The quick onyx goblin jumps over the lazy dwarf." >> phrases2.txt

# Exercício 7
grep br phrases2.txt | wc -l

# Exercício 8
grep -v br phrases2.txt | wc -l

# Exercício 9
echo "Japão" >> phrases2.txt
echo "Austrália" >> phrases2.txt

# Exercício 10
cp countries.txt bunch_of_things.txt
cat phrases2.txt >> bunch_of_things.txt

# Exercício 11
sort bunch_of_things.txt -o bunch_of_things.txt
