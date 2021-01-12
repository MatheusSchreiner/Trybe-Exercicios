// ----------------Questão 1-----------------

const fatorial1 = number => {

  let fatorialNumber = 1;
  if (number <= 0){
    return `O número dado foi ${number} por ser menor igual a 0, não da para realizar o fatorial`;
  }
  for (let index = 1; index <= number; index += 1) {
    fatorialNumber *= index;
  }
  return `O fatorial de ${number} é: ${fatorialNumber}`;
}

console.log(fatorial1(4));

//Outra forma de resolver a Questão 1

const fatorial2 = number => number > 1 ? number * fatorial2(number - 1) : 1;

console.log(fatorial2(4));


// ----------------------Questão 2------------------------

const longestWord = prash => {
  let words = prash.split(' ');
  let word = words[0];

  for (let index = 0; index < prash.split(' ').length; index += 1) {

      if(words[index].split('').length > word.split('').length) {
        word = words[index];
      }
  }
  return word;
}

console.log(longestWord('teste funciona teste1111111111111 vereeeeeee isso'));

// Outra forma de resolver a Questão 2

const longestWord2 = prash => {
  let words = prash.split(' ');
  let maxNumber = 0;
  let result = '';

  for (let word of words) {
    if(word.length > maxNumber) {
      maxNumber = word.length;
      result = word;
    }
  }
  return result;
}

console.log(longestWord2('teste funciona teste22222222222 vere isso'));

// Outro forma de resulver a Questão 2

const longestWord3 = prash => prash.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord3('teste funciona teste333333333333 vere isso'));



// ------------------------------Questão 3------------------------
// Como este código é para puxar elementos e manipular o DOM ele irá travar o Run Code, então tira ele de comentario para rodar o index.html

// const btnIndex = document.getElementById('btn1');
// const paragraph1 = document.getElementById('paragraph1');

// let clickCount1 = 0;

// btnIndex.addEventListener('click', () => {
//   clickCount1 += 1;
//   paragraph1.innerText = `Você apertou: ${clickCount1} vezes no botão acima`;
  
// });

// // Outra forma de escrver a Questão 3

// const paragraph2 = document.getElementById('paragraph2');

// let clickCount2 = 0;

// document.getElementById('btn2').addEventListener('click', () => paragraph2.innerText = `Você apertou: ${clickCount2 += 1} vezes no botão acima`);



// ------------------------------Quetão 4-----------------------------

const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (paramOne) {

    const fun1 = paramInner => `Tryber ${paramInner} aqui!`;
    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`)

    return result
}

console.log(buildSkillsPhrase("Matheus"))
