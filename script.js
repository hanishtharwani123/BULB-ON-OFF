let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let image = document.getElementById("off");

const fun1 = () => {
  image.src = "images/on.png";
};

const fun2 = () => {
  image.src = "images/off.png";
};

btn1.addEventListener("click", fun1);
btn2.addEventListener("click", fun2);
