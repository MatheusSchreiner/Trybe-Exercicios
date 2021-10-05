## Descrição das Atividades
<br>

### 1. Crie o endpoint POST /upload
* O endpoint deve receber apenas um arquivo no campo file ;
* O arquivo deve ser armazenado na pasta uploads ;
* O arquivo armazenado deve ter o timestamp do upload (obtido com Date.now() ) seguido do nome original do arquivo.
* Exemplo, para o arquivo profile.png , o nome armazenado deve ser algo como 1616691266095-profile.png , já que o timestamp será diferente a cada vez.
* Retorne status 200 OK se der tudo certo.
* Altere o endpoint POST /upload para que atenda os seguintes critérios:
* Apenas aceite arquivos cuja extensão seja .png ; Caso o arquivo tenha outro tipo de extensão, retorne o status 403 Forbidden com o JSON a seguir:
~~~
{
  "error": { "message": "Extension must be `png`" }
}
~~~
### 2. Não aceite um arquivo cujo nome (ignorando o timestamp) já exista na pasta uploads . Caso o arquivo já exista, retorne o status 409 Conflict com o seguinte JSON:

~~~
{
  "error": { "mesage": "File already exists" }
}
~~~
Dica: procure sobre fileFilter no multer, pode ajudar.
### 3. Torne a pasta uploads pública de forma que seja possível baixar os arquivos enviados anteriormente.
