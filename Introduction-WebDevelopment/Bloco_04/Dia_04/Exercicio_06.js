function palindromo(word){
  let name = word.split(''); /*Comando split pega a string word e transforma ela em um urray onde cada letra e espaço é uma das caixinhas do array que
                                estou armazenando na variavel que criei de nome 'name'*/
  
  for(let count = 0; count <= name.length; count += 1){
      if(name[count] !== name[((name.length - 1) - count)]){
          return false;
      }
  }
  return true;
}

console.log(palindromo('arara'));
