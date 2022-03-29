const episodesContainer = document.querySelector('.episodes');
let loading;

// functions
const createLoadingText = () =>{
	loading = document.createElement('p');
	loading.innerText = 'Loading...';
	episodesContainer.appendChild(loading);
}

const removeLoadingText = () => {
	episodesContainer.removeChild(loading);
}

const getEpisodeDataAsyncAwait = async() => {
	let apiLink = 'https://swapi.dev/api/films/';

	try{
		const data = await fetch(apiLink);
		const convertedData = await data.json();

    removeLoadingText();
		createElements(convertedData.results);
	}catch(error){
		console.log(error)
	}
}

const getEpisodeDataThenCatch = () => {
	let apiLink = 'https://swapi.dev/api/films/';
	fetch(apiLink).then(res => {
		return res.json();
	}).then(convertedData => {
    removeLoadingText();
		createElements(convertedData.results);
	}).catch(error => {
		console.log(error);
	})
}

const createElements = (data) =>{	
	data.forEach(episode => {
		const title = document.createElement('h3');
		title.innerText = episode.title;
		const episodeNumber = document.createElement('p');
		episodeNumber.innerText = `Episode ${episode.episode_id}`;
		const director = document.createElement('p');
		director.innerText = episode.director;
		const producer = document.createElement('p');
		producer.innerText = episode.producer;
		const releaseDate = document.createElement('p');
		releaseDate.innerText = episode.release_date;
		const openingCrawl = document.createElement('p');
		openingCrawl.innerText = episode.opening_crawl;

		const episodeDiv = document.createElement('div');
		episodeDiv.appendChild(title)
		episodeDiv.appendChild(episodeNumber)
		episodeDiv.appendChild(director)
		episodeDiv.appendChild(producer)
		episodeDiv.appendChild(releaseDate)
		episodeDiv.appendChild(openingCrawl)

		episodesContainer.appendChild(episodeDiv);
	})
}

createLoadingText();
getEpisodeDataAsyncAwait()
// getEpisodeDataThenCatch();
