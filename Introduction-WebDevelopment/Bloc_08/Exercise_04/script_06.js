const assert = require('assert')

const palio = ["Palio", "Fiat", 2019]
const shelbyCobra = ["Shelby Cobra", "Ford", 1963]
const chiron = ["Chiron", "Bugatti", 2016]

// escreva toObject abaixo

// Existem duas formas de escrever, a primeira ele ja subentender que o retorno é um objeto e que o que eu escrevi ali dentro são as propriedades e o que eu passei como parâmetro são os valores e elas vao ir pra cada propriedade na ordem correspondente, ou seja, primeiro valor pra primeira propriedade, seria a mesma forma de eu escrever como a segunda forma ali em baixo, é a mesma coisa e as duas estão certas.

const toObject2 = ([name, brand, year]) => ({ name, brand, year});

const toObject = ([name, brand, year]) => ({ name: name, brand: brand, year: year });

assert.deepStrictEqual(toObject(palio), { name: "Palio", brand: "Fiat", year: 2019 })
assert.deepStrictEqual(toObject(shelbyCobra), { name: "Shelby Cobra", brand: "Ford", year: 1963 })
assert.deepStrictEqual(toObject(chiron), { name: "Chiron", brand: "Bugatti", year: 2016 })