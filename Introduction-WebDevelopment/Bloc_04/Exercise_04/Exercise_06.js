//Duas formas de resolver o exercício
function verificaPalindrome(palavra) {
  let arrayLetras = palavra.split("");
  let isPalindrome = true;
  for (let index in arrayLetras) {
    if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

function verificaPalindrome(string) {
  let reverse = string.split("").reverse().join(""); // Comando split pega a string word e transforma ela em um urray onde cada letra e espaço é uma das caixinhas do array que
                                                     // estou armazenando na variavel que criei de nome 'name'
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome('arara')); //true
console.log(verificaPalindrome('desenvolvimento')); //false

