const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const myTaskContainer = document.querySelector(".my-tasks");
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const daysUlList = document.querySelector("#days");
  let buttonContainer = document.querySelector('.buttons-container');

  function criandoDias() {
    //for(let index = 0; index < decemberDaysList.length; index++){
//}
//criar funcao de cricao separada das atribuicoes 

    for(let index =0; index < decemberDaysList.length; index++){
        const days = document.createElement('li');
        const decemberDays = decemberDaysList[index];
        days.innerText = decemberDays;

        daysUlList.appendChild(days);

        if(decemberDays == 24 || decemberDays == 31){
          days.className = 'day holiday'
          daysUlList.append(days);
        }else if(decemberDays == 4 || decemberDays == 11 || decemberDays == 18){
          days.className = 'day friday'
          daysUlList.append(days);
        }else if(decemberDays == 25){
          days.className = 'day friday holiday'
          daysUlList.append(days);
        }else{
          days.className = 'days';
          daysUlList.append(days);
        }
    }
  }
  criandoDias();

function buttonHoliday () {
  let button = document.createElement('button')
  button.innerText = 'Feriados';  
  button.setAttribute("id",  "btn-holiday")
  // button.id = 'btn-holiday'
  buttonContainer.appendChild(button)
}
buttonHoliday();

function changeColorHoliday() {
  let changeColor = document.querySelectorAll(".holiday");
  let callButton = document.querySelector("#btn-holiday")
  callButton.addEventListener('click', () => {
    for(let index = 0; index < changeColor.length; index++){
    changeColor[index].classList.toggle('holiday22');
    }
  })
}
changeColorHoliday();
// Parte 4
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira";
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function buttonFriday(){
  let button = document.createElement('button');
  button.innerText = 'Sexta-feira';
  button.setAttribute("id", "btn-friday");
  buttonContainer.appendChild(button)
}
buttonFriday();

// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira;
// Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
//alguma forma de chegar na class do filho pelo pai

function changeFriday(){
  let changeFridayDay = document.querySelectorAll(".friday");
  let callButton = document.querySelector('#btn-friday');
  const fridaysList = [4, 11, 18, 25];
  callButton.addEventListener('click', () => {
    for(let index = 0; index < changeFridayDay.length; index++){
      changeFridayDay[index].classList.toggle('holiday22');
      if (changeFridayDay[index].innerText == 'Sextou'){
        changeFridayDay[index].innerText = fridaysList[index];
      }else{
        changeFridayDay[index].innerText = 'Sextou';
      }
    }
  } )
}

changeFriday();

// function changeFriday2(){
//   let start = 4;
//   for(let index = 0; index < 4; index++){
//     if(start + 7[index] == decemberDaysList.innerText.value){
//       decemberDaysList.innerText = 'SEXTOU!';
//     }
//     console.log(decemberDaysList.innerText.value)
//   }
// }
// changeFriday2();


function taskList (string) { 

  const myTaskList = document.createElement("span");
  myTaskList.innerText = string;
  myTaskContainer.appendChild(myTaskList)

}

taskList('cozinhar');

// Implemente uma função que adicione uma legenda com cor para a tarefa;
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task;
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".


function addSubtitleTask(string) {
  const subtitleTask = document.createElement('div')
  subtitleTask.classList.add('task')
  subtitleTask.style.backgroundColor = string;
  myTaskContainer.appendChild(subtitleTask);

}

// addSubtitleTask('blue');
//alterando fucao acima para ter uma cor dinamica e nao passada dentro de funcao, a cor podera vir pelo css 

function addSubtitleTaskWithCss(){
  const subtitleTask = document.createElement('div')
  subtitleTask.classList.add('task color')
  // subtitleTask.style.backgroundColor = string;
  myTaskContainer.appendChild(subtitleTask);

}

addSubtitleTask();

// Implemente uma função que selecione uma tarefa;
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada;
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

function taskSelector() {
  let selectButton = document.querySelector('.task')
  selectButton.addEventListener('click', () =>{
    console.log(selectButton);
    selectButton.classList.toggle('selected');
    selectButton.classList.toggle('color');
  })
}
taskSelector();

//Implemente uma função que atribua a cor da tarefa ao dia do calendário;
//Adicione um evento que, ao clicar em um dia do mês no calendário, 
//atribua a esse dia a cor da legenda da sua tarefa selecionada;
//Ao clicar novamente no dia com a cor da legenda, a sua cor deverá 
//voltar à configuração inicial rgb(119,119,119).

// function dateSelector(){
//   for(let index = 0; index < decemberDaysList.length; index++){
//   let dateSelectButton = document.querySelectorAll('.days')[index];
//   dateSelectButton.addEventListener('click', () =>{
//     console.log(dateSelectButton);
//     // dateSelectButton.style.backgroundColor = 'blue';
//     dateSelectButton.classList.toggle('color')
//   })
// }}
// dateSelector();

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto “COMPROMISSOS”, adiciona o item à lista “MEUS COMPROMISSOS” ao clicar no botão “ADICIONAR”;
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em “ADICIONAR”;
// Ao pressionar a tecla “enter” o evento também deverá ser disparado.

let taskInputText = document.querySelector('#task-input');
let taskListC = document.querySelector('.task-list')
let addCommitmentButton = document.querySelector('#btn-add')
let validateInput = () => taskInputText.value.trim().length > 0;

  function createCommitments(text){
    let commitmentsList = document.createElement('li')
    commitmentsList.innerText = text
    taskListC.appendChild(commitmentsList)
  }

function addCommitment(){
  const commitmentInput = taskInputText.value;
  addCommitmentButton.addEventListener('click', () =>{
    if(validateInput() > 0 ){
      console.log(taskInputText.value);
      createCommitments(commitmentInput)
    }else{
      alert('vacilo')
    }
  })
 
}

addCommitment();

//forma do gabarito abaixo 

// const addCommitmentGabarito = () => {
//   addCommitmentButton.addEventListener('click', () => {
//     if(validateInput() > 0){
//       let newCommitment = document.createElement('li');
//       newCommitment.innerText = taskInputText.value;
//       taskListC.appendChild(newCommitment);
//       taskInputText.value = '';
//     }else{
//       alert('Error')
//     }
//   });
// }
// addCommitmentGabarito();

  // getInputField.addEventListener('keyup', (event) => {
  //   if (event.key === 'Enter' && getInputField.value.length > 0) {
  //     let newLi = document.createElement('li');
  //     newLi.innerText = getInputField.value;
  //     getTaskList.appendChild(newLi);
  //     getInputField.value = '';
  //   }
  // });




