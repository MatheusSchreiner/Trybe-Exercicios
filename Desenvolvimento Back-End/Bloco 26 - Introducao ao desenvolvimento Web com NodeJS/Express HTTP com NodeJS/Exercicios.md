### Comandos iniciais para iniciar as atividades
~~~
// Crie e entre em uma pasta e digite no terminal os seguitnes comandos para iniciar as atividades
npm init -y
npm i express express-rescue
npm i -D nodemon

// Crie um arquivo index e coloque o seguinte código:
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

// Aqui é onde ficará os códigos dos exercícios

app.listen(PORT, () => console.log(`Funcionando na porta ${PORT}`));

~~~

### 1. 
~~~
app.get('/ping', (_req, res) => {
  return res.status(200).json({ message: 'pong' });
});
~~~
<br>

### 2. 
~~~
app.post('/hello', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'ERRO' });
  return res.status(200).json({ message: `Hello, ${name}` });
});
~~~
<br>

### 3. 
~~~
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) return res.status(400).json({ message: 'ERRO' });
  if (Number(age) < 18) return res.status(401).json({ message: 'Unauthorized' });
  return res.status(200).json({ message: `Hello, ${name}` });
});
~~~
<br>

### 4. 
~~~
http://localhost:3000/user/?name=Matheus&age=18

app.put('/user', (req, res) => {
  const { name, age } = req.query;
  if (!name || !age) return res.status(400).json({ message: 'ERRO' });
  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});
~~~
<br>

### 5. 
~~~
// Crie outro arquivo

const fs = require('fs/promises');

function getSimpsons () {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent));
}

function setSimpsons (newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

module.exports = { getSimpsons, setSimpsons };
~~~
<br>

### 6. 
~~~
const rescue = require('express-rescue');

const simpsonsUtils = require('./fs-utils');

/* ... */

app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();

  res.status(200).json(simpsons);
}))
~~~
<br>

### 7. 
~~~
app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const simpsons = await simpsonsUtils.getSimpsons();

    const simpson = simpsons.find(({ id }) => id === req.params.id);

    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(202).json(simpson);
  })
);
~~~
<br>

### 8. 
~~~
app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await simpsonsUtils.getSimpsons();

    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await simpsonsUtils.setSimpsons(simpsons);

    res.status(204).end();
  })
);
~~~
<br>

### 9.
~~~
// authMiddleware.js

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }

  return next();
}


// index.js

const express = require('express');
const authMiddleware = require('./authMiddleware');
const app = express();

app.use(express.json());
app.use(authMiddleware);

/* ... */

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
~~~
<br>

### 10.
~~~
// generateToken.js

const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;


// index.js

/* ... */
const crypto = require('crypto');
/* ... */

app.post('/signup', (req, res) => {
  const { email, passowrd, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = crypto.randomBytes(8).toString('hex');

  res.status(200).json({ token });
})

/* ... */
~~~
<br>
