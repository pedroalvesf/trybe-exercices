const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

const changeTitleWithId = document.getElementById("page-title"); //with id
changeTitleWithId.innerHTML = "Favorite Movie";

const changeTitleh2WithClass = document.querySelector(".container-header h2"); //with class
changeTitleh2WithClass.innerHTML = "Favorite Movie";


const changeTitleWithoutIdofClass = document.querySelector("header h2"); //without id or class
changeTitleWithoutIdofClass.innerHTML = "Favorite Movieaaa";

const changeParagraphContentWithId = document.getElementById("paragraph");
changeParagraphContentWithId.innerHTML = "Star Wars";

const changeParagraphContentWithot = document.querySelector("header p");
changeParagraphContentWithot.innerHTML = "Lord of The Rings";

const changeH4colorWithId = document.getElementById("subtitle");
changeH4colorWithId.style.backgroundColor = "blue";

const changeH4contentWithId = document.getElementById("subtitle");
changeH4contentWithId.innerHTML = "The return of the king";
changeH4contentWithId.style.color = "white";

const changeH4colorWithoutId = document.querySelector("header h4");
changeH4colorWithoutId.style.backgroundColor = "green";

const changeHeaderColorWithClass = document.getElementsByClassName("container-header")[0];
changeHeaderColorWithClass.style.backgroundColor = "grey";

//Transforming everything in functions 

const changingParagrathColor = (color) =>{
    const paragrathColor = document.getElementById("paragraph"); // id
    paragrathColor.style.color = color;
}
changingParagrathColor("orange");

function changingParagrathColorAgain (){
    const paragrathColor = document.querySelector("paragraph");//id
    paragrathColor.style.color = color;
}
changingParagrathColor("yellow");

function changingParagrathColorAgain (){
    const paragrathColor = document.querySelector("header p");// without class or id
    paragrathColor.style.backgroundColor = "black";
}
changingParagrathColorAgain();

const changingInnerTitleWithFunction = () => {
    const changingInnerTitleWithFunction = document.getElementById("page-title");
    changingInnerTitleWithFunction.innerHTML = "Favorite movie ever"
}
changingInnerTitleWithFunction();

const changingInnerTitleWithFunction2 = () => {
    const changingInnerTitleWithFunction = document.querySelector("header h2");
    changingInnerTitleWithFunction.innerHTML = "Favorite Movie Ever"
}
changingInnerTitleWithFunction2();

const changingInnerTitleWithFunction3 = () => {
    const changingInnerTitleWithFunction = document.querySelector(".container-header h2");
    changingInnerTitleWithFunction.innerHTML = "Favorite Movie Ever!!!"
}
changingInnerTitleWithFunction3();