const visitsDisplay = document.querySelector(".visits");
let visitCount = Number(window.localStorage.getItem("visitCount-ls")) || 0;

if (visitCount !== 0) {
	visitsDisplay.textContent = visitCount;
} else {
	visitsDisplay.textContent = `Welcome!`;
}

visitCount++;

localStorage.setItem("visitCount-ls", visitCount);

const currentTemp = document.querySelector('#weather-now');
const weatherIcon = document.querySelector('#weather-icon');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=7.44&lon=125.80&units=metric&appid=2692b252572495c21b05586289eb350d';

const apiFetch = async() => {
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error('Failed to fetch data: ' + response.statusText);
        }

        const data = await response.json();

        //console.log(data);
        displayResults(data);
    }
    catch (error){
        console.error('Error fetching data:', error.message);
    }
}


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C - ${data.weather[0].description}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;    
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
  }

apiFetch();