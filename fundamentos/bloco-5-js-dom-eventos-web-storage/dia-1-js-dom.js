document.getElementById("IdDoElemento") = 

document.getElementById("paragraph");
document.getElementById("paragraph").innerText = 'Star Wars'
paragraph.style.color = "red";

document.getElementById("page-title").innerText = 'Best movie';


document.querySelector("p"); //it will return the first element, only the first one

document.querySelector(".nome-da-classe p"); // return related to css
// use the querySelector with class or id to return exactly

document.querySelectorAll(".fatherClass .childClass").length // control as a list


const header = document.getElementById("header-container");
header.style.backgroundColor = "green";

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = "orange";

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = "purple";
}
const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = "yellow";

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = "black";
}

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "green"