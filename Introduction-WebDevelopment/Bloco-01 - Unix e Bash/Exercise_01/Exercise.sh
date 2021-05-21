# Exercise 1

echo "Shell Script é demais! "

# Exercise 2

frase="Shell Script com variáveis é demais! "

echo $frase

# Exercise 3

hostname=$(hostname)

echo "Este script está rodando no computador: $hostname"

# Exercise 4

filepath=/home/Documentos/B1_D5/e4.sh 

if [ -e $filepath ]
    then
        echo "O caminho $filepath está habilitado!"
        if [ -w $filepath ]
            then
                echo "Você tem permissão para editar $filepath"
        else
            echo "Você tNÃO foi autorizado a editar $filepath"
        fi
else
    echo "O caminho $filepath NÃO está habilitado!"
fi

# Exercise 5

frase="shell script usando estrutura repetição for terminal"

for palavra in $frase
do
    echo $palavra
done

# Exercise 6

echo "Digite o caminho de um arquivo ou diretório: "
read arquivo

if [ -f "$arquivo" ]
    then
        echo "$arquivo é um arquivo comum"
        ls -l $arquivo
elif [ -d "$arquivo" ]
    then
        echo "$arquivo é um diretório"
        ls -l $arquivo
else
    echo "$arquivo é um outro tipo de arquivo"
    ls -l $arquivo
fi

# Exercise 7

arquivo=$1

if [ -f "$arquivo" ]
    then
        echo "$arquivo é um arquivo comum"
        ls -l $arquivo
elif [ -d "$arquivo" ]
    then
        echo "$arquivo é um diretório"
        ls -l $arquivo
else
    echo "$arquivo é um outro tipo de arquivo"
    ls -l $arquivo
fi

# Exercise 8

arquivos=$@

for arquivo in $arquivos
do
    if [ -f "$arquivo" ]
        then
            echo "$arquivo é um arquivo comum"
            ls -l $arquivo
    elif [ -d "$arquivo" ]
        then
            echo "$arquivo é um diretório"
            ls -l $arquivo
    else
        echo "$arquivo é um outro tipo de arquivo"
        ls -l $arquivo
    fi
done

# Exercise 9

arquivo=$1
contagem=`ls -l $arquivo | wc -l`

if [ -d "$arquivo" ]
    then
        echo "O $arquivo tem $contagem arquivos."
else
    echo "O argumento $arquivo não é um diretório!"
fi

# Exercise 10

dia=$(date +%F)
arquivos=`ls *.png`

for novo_nome in $arquivos
do
    mv $novo_nome ${dia}-${novo_nome}
done

# Exercise 11

diretorio=$1
extensao=$2

dia=$(date +%F)

cd diretorio

arquivos=`ls *.$extensao`

for novo_nome in $arquivos
do
    echo "Renomenando $novo_nome para ${dia}-${novo_nome}"
    mv $novo_nome ${dia}-${novo_nome}
done
