~~~
npx create-react-app my-app


cd my-app

# Só necessário se CRA não criar automaticamente um novo repositório
git init
git add .
git commit -m 'react-create-app on Heroku'

heroku create -b https://github.com/mars/create-react-app-buildpack.git


git push heroku master
~~~
