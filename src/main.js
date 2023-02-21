//****1/4****//----DOM selector methods
// assign the correct element to the variable
const buttonElem = document.getElementById("button");

buttonElem.addEventListener('click', () => {
  const oldText = buttonElem.innerText;
  return button.innerText = oldText === "ON" ? "OFF" : "ON";
});
//****2/4****//----DOM selector methods
const buttonElem2 = document.querySelector("#wrapper button");
const inputElem = document.querySelector("#wrapper input");

buttonElem2.addEventListener('click', () => {
  const oldText = inputElem.value;
    return inputElem.value = oldText === "ON" ? "OFF" : "ON";
});
//****3/4****//----DOM selector methods
const listItems = document.querySelectorAll("#list li");
  
  const handleHover = (event) => {
    return event.target.innerText = 'ON';
  };
  
  if(listItems.length > 1) {
    listItems.forEach(item => item.addEventListener('mouseover', handleHover));
  }
//****3/4****//----Premium ----DOM selector methods
//****1/5****//----Events and user interactions
const button = document.getElementById('button');
const input = document.getElementById('input');

const handleClick = () => {
  input.value = 'Hello World';
};

button.addEventListener('click', handleClick);
//****2/5****//----Events and user interactions
const element = document.getElementById('element');
const changeText = () => {
  element.innerText = 'Thanks!';
};
//****3/5****(Is the same)//----Events and user interactions
element.addEventListener("mouseover", changeText);
//****1/4****//----DOM manipulation
const button = document.querySelector('#button');
  
const removeRedCircle = () => {
  const redCircle = document.querySelector('#red');
  redCircle.parentNode.removeChild(redCircle);
};
//****2/4****//----DOM manipulation
const button = document.querySelector('#wrapper button');
  
const changeInput = () => {
  const input = document.querySelector('#inputEl');
  if(input) {
    input.value = 'Hello World';
  }
};

button.addEventListener('click', changeInput);

document.querySelector('#wrapper input').setAttribute('id', 'inputEl');
//****3/4****// ---->Premium (----DOM manipulation)
//****4/4****// ---->Premium(----DOM manipulation)

//****1/5****//----(DOM fundamentals) 
const button = document.getElementById('button');
button.addEventListener('click', () => {
  const checkbox = document.getElementById('checkbox');
  checkbox.checked = true;
});
//****2/5****//(DOM fundamentals)
const button = document.getElementById('button');
button.addEventListener('click' , () => {
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const fullName = document.getElementById('fullName');
  fullName.value = firstName.value + ' ' + lastName.value;
});
//****3/5****// ---->Premium (DOM fundamentals)
//****4/5****// ---->Premium (DOM fundamentals)

//****5/5****// ---DOM fundamentals
const list = document.getElementById('list');
const balloons = list.children;
const popBalloon = (event) => {
  const balloon = event.target;
  balloon.style.visibility = 'hidden';
};
for (let i = 0; i < balloons.length; i++) {
  balloons[i].addEventListener('mouseover', popBalloon);
}

//****1/1****//Recursive Functions 
const button = document.getElementById('button');
let stopped = false;
 
function move(isReturning) {
 const width = button.parentNode.clientWidth;
 const left = parseInt(button.style.left , 10) || 0;
 if (!stopped) {
    button.style.left = (isReturning ? left - 1 : left + 1) + 'px';
    setTimeout(() => move ((isReturning && left > 0) || left === width - button.clientWidth), 10);
 };
};
 
move();
 
button.addEventListener('click', () => {
  stopped = !stopped;
  move();
});
// divido en secciones