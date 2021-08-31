## Descrição das Atividades
<br>

### Para os exercícios a seguir, utilizaremos um banco de dados movies do repositório Data Bases
<br>

### 1. Altere o imdbRating para 7.7 no filme Batman .
### 2. Altere budget para 1 no filme Godzilla .
### 3. Altere budget para 15 e imdbRating para 5.5 no filme Home Alone .
### 4. Aumente em 2 o imdbRating do filme Batman .
### 5. Aumente em 5 o budget do filme Home Alone .
### 6. Multiplique por 4 o imdbRating do filme Batman .
### 7. Renomeie o campo budget para estimatedBudget do filme Batman .
### 8. Utilize o operador $min para alterar o budget para 5 do filme Home Alone .
### 9. Utilize o operador $max para alterar o imdbRating para 8.6 do filme Godzilla . Além disso, altere a categoria "adventure" para "thriller" do filme Godzilla .
### 10. Utilizando o operador $currentDate , crie um campo chamado lastUpdated com o tipo timestamp no filme Home Alone .
### 11. Utilizando uma única operação, crie um campo chamado sequels e atribua a ele o valor 0 em todos os documentos.
### 12. Utilizando uma única operação, remova os campos budget e estimatedBudget em todos os documentos.
### 13. Para os filmes Batman ou Home Alone , atribua a imdbRating o valor 17 , caso o valor de imdbRating seja menor que 17 .

<br>

### Para os exercícios a seguir, utilizaremos um banco de dados xmen do repositório Data Bases
#### Para todas as alterações realizadas, você deve sempre atualizar ou adicionar o campo lastUpdate , que armazena a data da última alteração com o tipo timestamp.
<br>

### 14. Remova o campo class dos documentos que possuem esse campo com o valor unknown .
### 15. Produza uma query que renomeie os campos de name para hero_name , e de true_name para full_name ; adicione o campo power com valor 100, em todos os documentos.
### 16. Produza uma query onde os mutantes class omega ou gama passam a ter seu poder de 500 somente se seu poder for menor que 500 .
### 17. Produza uma query onde os mutantes class gama passam a ter seu poder de 300 somente se seu poder for maior que 300 .
### 18. Decremente em 100 o poder dos mutantes que não possuem a propriedade class .
### 19. Em apenas uma query adicione o campo areas com o seguinte array como valor: ["Students Room"] a todos os mutantes que são Senior Staff que tenham poder acima de 100 e para todos os Junior Staff com poder acima de 200.
### 20. Em apenas uma query, adicione o campo areas com ["Outside"] a todos os Junior Staff que não tenham o campo areas definido.
