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
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const daysUlList = document.querySelector("#days");
  let buttonContainer = document.querySelector('.buttons-container');

  function criandoDias() {
    //for(let index = 0; index < decemberDaysList.length; index++){
//}
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
  let button = document.createElement('button')
  button.innerText = 'Sexta-feira';
  button.setAttribute("id", "btn-friday");
  buttonContainer.appendChild(button)
}
buttonFriday();

// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira;
// Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.

