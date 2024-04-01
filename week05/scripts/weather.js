const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=imperial&appid=2692b252572495c21b05586289eb350d';

const apiFetch = async() => {
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error('Failed to fetch data: ' + response.statusText);
        }

        const data = await response.json();

        console.log(data);
        displayResults(data);
    }
    catch (error){
        console.error('Error fetching data:', error.message);
    }
}


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;    
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
  }

apiFetch();