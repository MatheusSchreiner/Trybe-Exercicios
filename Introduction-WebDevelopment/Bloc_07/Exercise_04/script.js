const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// ---------------Questão 1----------------
console.log('---------------Questão 1---------------');
const turnoLesson2 = (Obj, Key, Value) => Obj[Key] = Value;
console.log(turnoLesson2(lesson2, 'turno', 'tarde'));



// --------------Questão 2---------------
console.log('---------------Questão 2---------------');
const keysObject = Obj => Object.keys(Obj);
console.log(keysObject(lesson1));



// --------------Questão 3----------------
console.log('---------------Questão 3---------------');
const lenghtObject = Obj => Object.keys(Obj).length; // Como Objeto ele não retorna o tamanho, então usando o Object.keys ele transforma ele em array, ai sim eu consigo ler o seu tamanho
console.log(lenghtObject(lesson1));



// ----------------Questão 4------------
console.log('---------------Questão 4---------------');
const valueObject = Obj => Object.values(Obj);
console.log(valueObject(lesson1));



// ---------------Questão 5-----------------
console.log('---------------Questão 5---------------');
const allLessons = {};

Object.assign(allLessons, {lesson1, lesson2, lesson3});

// ou da pra criar assim

const allLessons2 = Object.assign({}, {lesson1, lesson2, lesson3})

//Observação: ao utilizar a chave para colocar as propriedades lesson1 2 e 3, ele irá colcoar elas direto como objeto na variavel, mas se vc colocar elas como o padrão que a gente faz, elas irão sobescrever quer ver

const allLessons3 = Object.assign({}, lesson1, lesson2, lesson3);
//Dê um console.log agora o allLessons3 e você verá que elas sobrescreveram, sacou agora.
console.log(allLessons);




// --------------------Questão 6-------------------
console.log('---------------Questão 6---------------');
const allStudents = Obj => {
  let students = 0;
  let arrayLessons = Object.keys(Obj);
  for (let i of arrayLessons) {
    students += Obj[i].numeroEstudantes;
  }
  return students;
}

console.log(allStudents(allLessons));




// ---------------------Questão 7----------------------
console.log('---------------Questão 7---------------');
const positionValue = (Obj, number) => {
  let keys = Object.keys(Obj);
  return Obj[`${keys[number]}`];
}

console.log(positionValue(lesson1, 2));

//Outra forma de resolver a Questão 7 seria
const getValueByNumber = (Obj,number) => Object.values(Obj)[number];
console.log(getValueByNumber(lesson1, 2));


// ----------------------Questão 8------------------------
console.log('---------------Questão 8---------------');
const validationObject = (Obj, key, value) => {
  const realObject = Object.entries(Obj);
  const newObject = [key, value];
  let verification = false;
  for (let index of realObject) {
    if (index[0] === newObject[0] && index[1] === newObject[1]) {
      verification = true;
    }
  }
  return verification;
}

console.log(validationObject(lesson1, 'materia', 'Matemática'));

//Da pra escrever este mesmo código utilizando o for in

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let i in arr) {
    if (arr[i][0] === key && arr[i][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Maria'));

// ----------------------Questão 9------------------------
console.log('---------------Questão 9---------------');
const studentMath = Obj => {
  const arrayObject = Object.values(Obj);
  let numbersStudents = 0;
  for (let i of arrayObject) {
    if(i.materia === 'Matemática') {
      numbersStudents += i.numeroEstudantes;
    }
  }
  return numbersStudents;
}

console.log(studentMath(allLessons));