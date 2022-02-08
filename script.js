// select all the elements
const container = document.querySelector('.container');
const newElementContainer = document.querySelector('.new-element-container');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');
console.log(container);
console.log(btn1);

// listen for the 'click' events
btn1.addEventListener('click', btn1func);
btn3.addEventListener('click', btn3incrementer)

// creating new element
function btn1func(){
	// create the new element
	const para = document.createElement('p');

	// add text
	para.innerText = 'new paragraph element added';

	// append to the newElementContainer
	newElementContainer.appendChild(para);
}

// counter
let btn3counter = 0;
function btn3incrementer(){
	btn3counter += 1;

	// 2 ways of concatenating strings
	// btn3.innerText = 'Clicked '+btn3counter+' times';
	btn3.innerText = `Clicked ${btn3counter} times`;
}

// practice

// write code so that when btn2 is clicked a new <h1> element is added to the newElementContainer

// write code so that when btn4 is clicked the number is multiplied by 100. For this make sure your initial variable is set to 1
