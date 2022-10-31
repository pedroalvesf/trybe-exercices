const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

// const mudaTitulo = document.getElementById("page-title"); //with id
// mudaTitulo.innerHTML = "Favorite Movie";

// const mudaTituloh2 = document.querySelector(".container-header h2"); //with class
// mudaTituloh2.innerHTML = "Favorite Movie";


const mudaTituloh2 = document.querySelector("header h2"); //without id or class
mudaTituloh2.innerHTML = "Favorite Movieaaa";

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
changeHeaderColorWithClass.style.backgroundColor = "yellow";