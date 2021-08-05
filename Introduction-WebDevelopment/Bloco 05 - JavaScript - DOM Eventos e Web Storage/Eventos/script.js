window.onload = function() {
createDaysOfTheWeek();
daysCalender();
buttonHoliday('Feriados');
changeBackgroundColorHoliday();
buttonFriday('Sextou!');
changeButtonFriday();
zoomDays();
taskOn('Varrer');
colorTaskLegend('blue');
selectTask();
changeDayColor();
}

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = weekDays[index];
    weekDaysList.appendChild(dayListItem);
  };
};

/*O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e 
os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>*/

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function daysCalender() {
  const daysUl = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const daysList = document.createElement('li');
    daysList.innerText = dezDaysList[index];
    daysList.className = 'day';

    if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
      daysList.className = 'day friday';
    }
    if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
      daysList.className = 'day holiday';
    }
    if (dezDaysList[index] === 25) {
      daysList.className = 'day friday holiday';
    }

    daysUl.appendChild(daysList);
  }
}

/*Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .*/

function buttonHoliday(Feriados) {
  const divButtons = document.querySelector('.buttons-container');
  const btnHoliday = document.createElement('button');

  btnHoliday.id = 'btn-holiday';
  btnHoliday.innerText = Feriados;
  divButtons.appendChild(btnHoliday);
}

/*Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb (238,238,238)" .*/

function changeBackgroundColorHoliday(){
  const holiday = document.querySelectorAll('.holiday');
  const buttonHoliday = document.querySelector('#btn-holiday');

  buttonHoliday.addEventListener('click', function() {
  
    for (let index = 0; index < holiday.length; index += 1) {

      if (holiday[index].style.backgroundColor === 'green') {
        holiday[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        holiday[index].style.backgroundColor = 'green';
      }
    }
  })
}

/*Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container"*/

function buttonFriday(Friday) {
  const divFriday = document.querySelector('.buttons-container');
  const btnFriday = document.createElement('button');

  btnFriday.id = 'btn-friday';
  btnFriday.innerText = Friday;
  divFriday.appendChild(btnFriday);
}

/*Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.*/

function changeButtonFriday() {
  let fridays = document.querySelectorAll('.friday');
  let buttonFriday = document.querySelector('#btn-friday');
  let Sextou = 'Sextou!!!';

  buttonFriday.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      
      if (fridays[index].innerText === Sextou) {
        fridays[index].innerText = (parseInt(fridays[index].previousElementSibling.innerText) + 1);
      } else {
        fridays[index].innerText = Sextou;
      }
    }
  })
}

/*Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro 
do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, 
o texto deve retornar ao tamanho original.*/

function zoomDays() {
  let zoom = document.querySelector('#days');
  zoom.addEventListener('mouseover', function(event) {

  if (event.target.localName === 'li') {
     let zoomDay = event.target;
     zoomDay.style.transform = 'scale(1.6)'
     }
  })
  zoom.addEventListener('mouseout', function(event) {

    if (event.target.localName === 'li') {
      let zoomDay = event.target;
      zoomDay.style.transform = 'scale(1)';
      }
    })
}

/*Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string 
com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .*/

function taskOn(task) {
  const taskForMake = document.createElement('span');
  const divTask = document.querySelector('.my-tasks');

  taskForMake.innerText = task;
  divTask.appendChild(taskForMake);
}

/*Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. 
Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .*/

function colorTaskLegend(color) {
  const colorTask = document.createElement('div');
  const divTask = document.querySelector('.my-tasks');

  colorTask.style.backgroundColor = color;
  colorTask.className = 'task';
  divTask.appendChild(colorTask);
}

/*Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, 
atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.*/

function selectTask() {
  const divTask = document.querySelector('div.my-tasks div');

  divTask.addEventListener('click', function() {
    
    if (divTask.className === 'task') {
      divTask.className = 'task-selected';
    } else {
      divTask.className = 'task';
    }
  });
}

/*Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .*/

function changeDayColor() {
  const days = document.querySelector('#days');
  
  days.addEventListener('click', function(event) {
    const colorTask = document.querySelector('.task-selected').style.backgroundColor;
    if (event.target.style.color === 'blue') {
      event.target.style.color = 'rgb(119,119,119)';
    } else {
        event.target.style.color = colorTask;
      }
  })
}
