// select elements
const firstName = document.querySelector('.first');
const lastName = document.querySelector('.last');
const yearOfBirth = document.querySelector('.year');
const submitBtn = document.querySelector('#submit');
const userInfoContainer = document.querySelector('.user-info');


// addEventListener
submitBtn.addEventListener('click', handleSubmit);

// functions
// function for creating the elements
function handleSubmit(e) {
	// prevent page from refreshing
	e.preventDefault();

	const fullName = `${firstName.value} ${lastName.value}`;
	console.log(fullName);
	
	let age;
	const year = parseInt(yearOfBirth.value);
	// validate year
	if(validateYearOfBirth(year)){
		age = `you are ${2022-year} years old`;
	}else{
		age = 'you are not alive';
	}

	// create and append the elements
	const para = document.createElement('p');
	para.innerText = `Your name is ${fullName}, ${age}.`;
	para.classList.add('info');
	userInfoContainer.appendChild(para);
}

const validateYearOfBirth = (year)=> {
	if(year < 0 || year > 2022){
		return false;
	}
	return true;
}
