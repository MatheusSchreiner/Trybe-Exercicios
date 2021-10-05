~~~
git remote rename heroku homolog

heroku create --remote prod

heroku config:set MESSAGE="HOMOLOG: Variáveis de ambiente funcionam" --app NOME-DO-APP-DE-HOMOLOG

heroku config:set MESSAGE="PROD: Variáveis de ambiente funcionam" --app NOME-DO-APP-DE-PROD

git add .
git commit -m "Adiciona Procfile"
git push prod master
~~~
