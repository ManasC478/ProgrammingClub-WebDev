// document - an object that represents the web page/html file
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");


// eventlisteners - functions used to listen to certain actions fired from the dom/web page
btn1.addEventListener('click', () => {
	// alert("you clicked button 1");
	if(btn1.style.border == "5px solid green"){
		btn1.style.border = "5px dotted yellow";
	}else{
		btn1.style.border = "5px solid green";
	}
})


// do this as practice
// when you click on button 2, the background color of that button should alternate between 'pink' and 'lightgreen'

// solution for practice
btn2.addEventListener('click', () => {
	if(btn2.style.backgroundColor == "pink"){
		btn2.style.backgroundColor = "lightgreen";
	}else{
		btn2.style.backgroundColor = "pink";
	}
})
