const main = document.getElementsByClassName("main");
const button = document.getElementsByTagName("button");
const item_red = '<div class="item_red"><h1>Красный блок</h1></div>';
const item_orange = '<div class="item_orange"><h1>Оранжевый блок</h1></div>';
const item_green = '<div class="item_green"><h1>Зеленый блок</h1></div>';
const item_brown = '<div class="item_brown"><h1>Коричневый блок</h1></div>';
const item_blue = '<div class="item_blue"><h1>Синий блок</h1></div>';
const item_violet = '<div class="item_violet"><h1>Фиолетовый блок</h1></div>';
button[0].onclick = () => window.location.href = '../Homework_5/Task_2/index.html';
button[1].onclick = () => main[0].style.backgroundColor = "red";
button[2].onclick = () => document.body.innerHTML = `<div class="wrapper"> ${item_red + item_orange +item_green +item_brown + item_blue + item_violet} </div>`;
    



       