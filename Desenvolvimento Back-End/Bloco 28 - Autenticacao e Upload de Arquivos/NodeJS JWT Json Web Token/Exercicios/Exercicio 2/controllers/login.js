const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env; 

const validateBody = (body) =>
  Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
  }).validate(body);

const login = async (req, res, next) => {
  const { username, password } = req.body;

  const { error } = validateBody(req.body);
  if (error) return next(error);

  if (username === 'admin' && password !== 's3nh4S3gur4???') {
    const err = new Error('Invalid username or password');
    err.statusCode = 401;
    return next(err);
  }

  const admin = username === 'admin' && password === 's3nh4S3gur4???';
  // Breve explicação, após ele ter passado pelo If acima, ele verificou caso a pessoa tenha colocado admin e a pass for errada, ira retornar erro, se tiver a mesma pass mas com outro usuário tbm dará erro, não acredito que seja legal, isso ne mas blz rs, caso esteja como admin e a pass certa, quer dizer que não vai voltar erro logo ele passa e a const aqui em cima vai retornar como um boolean TRUE, logo eu posso passar pro meu payload a const admin que ficará como TRUE se não fosse o admin ficaria como FALSE e tudo ok.

  const payload = {
    username,
    admin,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  return res.status(200).json({ token });
};

module.exports = login;
