// declarations
const todoList = document.querySelector('.list');
const inputElement = document.querySelector('.todo-input');
const submitBtn = document.querySelector('.add');

// event listeners
submitBtn.addEventListener('click', addItem);

// we are listening for any click inside the todoList <ol> element
todoList.addEventListener('click', checkOrDeleteItem)

function addItem(e) {
    e.preventDefault();

	// create the <li> element and add a class of 'list-item'
    const itemLi = document.createElement('li');
    itemLi.classList.add('list-item');

	// create <p> element and add the inputted value
	const itemPara = document.createElement('p');
	itemPara.innerText = inputElement.value;

	// create <div> as container for the 'checked' and 'delete' icons buttons
	const btnDiv = document.createElement('div');
	btnDiv.classList.add('btn-container');

	// create the icon buttons and append them in the div
	const completedBtn = document.createElement('button');
	completedBtn.classList.add('completed-btn');
	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete-btn');

	// innerHTML adds html code inside the element
	// Ex: completedBtn.innerHTML = '<i class="fas fa-check"></i>'
	// is equal to <button class="completed=btn"><i class="fas fa-check"></i></button>

	// <i class="fas fa-check"></i> is the icon code snippet from https://fontawesome.com/v5/search
	completedBtn.innerHTML = '<i class="fas fa-check"></i>';
	deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

	btnDiv.appendChild(completedBtn);
	btnDiv.appendChild(deleteBtn);

	// add the text and icon btn elements in the <li>
	itemLi.appendChild(itemPara);
	itemLi.appendChild(btnDiv);

	// add itemLi to the <ul> container
    todoList.appendChild(itemLi);

	// reset the input value to be empty
    inputElement.value = "";
}

function checkOrDeleteItem(e){
	// save the <button> clicked
	// info on e.target here: https://developer.mozilla.org/en-US/docs/Web/API/Event/target
	const itemBtn = e.target;

	// access the <li> item element with parentElement attribute
	// <button> -> <div> -> <li>
	const listItem = itemBtn.parentElement.parentElement;
	
	// check which button was clicked
	if(itemBtn.classList[0] === 'completed-btn'){
		// toggle new classes in order to change the ui of 'completed items'
		// toggle depending on if the class name is already there or not will add or remove the given class name
		listItem.classList.toggle('checked');
        listItem.classList.toggle('item');
	}
	else if (itemBtn.classList[0] === 'delete-btn') {
		// remove the item
        listItem.remove();
    }
}
