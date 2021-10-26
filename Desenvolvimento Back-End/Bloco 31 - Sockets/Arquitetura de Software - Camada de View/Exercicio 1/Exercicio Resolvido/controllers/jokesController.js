const getjoke = require('../model/getJoke');

const listJokes = async (_req, res) => {
  const joke = await getjoke();
  return res.render('jokes/jokeView', { joke });
};

module.exports = { listJokes };
