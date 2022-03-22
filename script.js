// const promise = new Promise((resolve, reject) => {
// 	const a = 6;

// 	if(a === 6){
// 		resolve('Success');
// 	}else{
// 		reject('Failed')
// 	}
// })

// promise.then(res => {
// 	console.log(res);
// }).catch(err => {
// 	console.log(err);
// })

// console.log('code after promise')

const infoContainer = document.querySelector('.info-container');

const getCountry = () => {
	return fetch('https://restcountries.com/v3.1/name/peru');
}

let info;

const createElements = ([info]) => {
	const officialName = document.createElement('p');
	officialName.innerText = info["name"]["official"];
	const borders = document.createElement('p');
	borders.innerText = info["borders"];
	const flag = document.createElement('img');
	flag.src = info["flags"]["png"];
	flag.alt = 'not found';
	const continent = document.createElement('p');
	continent.innerText = info["continents"];

	infoContainer.appendChild(officialName)
	infoContainer.appendChild(borders)
	infoContainer.appendChild(flag)
	infoContainer.appendChild(continent)
}

const loading = document.createElement('p');
loading.innerText = 'loading...';

getCountry()
	.then(res => {
		return res.json();
	})
	.then(resJson => {
		// console.log('js object:', resJson)
		info = resJson;
		infoContainer.removeChild(loading);
		createElements(info);
	})
	.catch(err => {
		console.log(err);
	})

infoContainer.appendChild(loading);
