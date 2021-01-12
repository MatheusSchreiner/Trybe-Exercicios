 //Questão 1
 
 const testingScope = escopo => { 
  if (escopo === true) { 
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);


//Outra forma de resolver a Questão 1 mas sem a concatenação

let testingScopeLet = escopoLet => (escopoLet === true) ? 'Não devo ser utilizado fora do meu escopo (if)' : 'Não devo ser utilizada fora do meu escopo (else)';

console.log(testingScopeLet(true));





//Questão 2


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

console.log(`Os números ${orderEvens()} se encontram ordenados de forma crescente`);



//Outra forma de resolver a Questão 2 usando o método sort

const sortOrderEvens = array => array.sort((a, b) => a - b);

console.log(`Os números ${sortOrderEvens(oddsAndEvens)} se encontram ordenados de forma crescente`);



//Mais reduzido ainda utilzando o metodo sort

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenadas de forma crescente`);