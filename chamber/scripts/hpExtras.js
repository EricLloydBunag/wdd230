//Events Slideshow
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("eventSlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}

//Weather Current and Forecast
const currentTemp = document.querySelector('#weather-now');
const weatherIcon = document.querySelector('#weather-icon');
const forecastList = document.querySelector('#forecast-list');
const urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?lat=7.44&lon=125.80&units=metric&appid=2692b252572495c21b05586289eb350d';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=7.44&lon=125.80&units=metric&appid=2692b252572495c21b05586289eb350d';
const apiFetch = async(url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data: ' + response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
const displayCurrentWeather = (data) => {
    currentTemp.innerHTML = `${data.main.temp}&deg;C - ${data.weather[0].description}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;    
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
}
const displayForecast = (data) => {
  forecastList.innerHTML = '';
  for (let i = 0; i < 3; i++) { 
      const forecast = data.list[i * 8];
      const date = new Date(forecast.dt * 1000);
      const day = date.toLocaleDateString('en-US', { weekday: 'short' });
      const temp = forecast.main.temp;
      const desc = forecast.weather[0].description;
      const icon = forecast.weather[0].icon;
      const iconSrc = `https://openweathermap.org/img/w/${icon}.png`;
      const listItem = document.createElement('li');
      listItem.innerHTML = `
          <img src="${iconSrc}" alt="${desc}">
          <span>${day}</span>
          <span>${temp}&deg;C - ${desc}</span>
      `;
      forecastList.appendChild(listItem);
  }
}
const fetchData = async() => {
    const currentWeatherData = await apiFetch(urlCurrent);
    const forecastData = await apiFetch(urlForecast);
    if (currentWeatherData) {
        displayCurrentWeather(currentWeatherData);
    }
    if (forecastData) {
        displayForecast(forecastData);
    }
}
fetchData();


// Spotlight
const url = 'https://ericlloydbunag.github.io/wdd230/chamber/data/members.json';

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Filter members with silver or gold membership levels
    const qualifiedMembers = data.members.filter(member => member.membership === 'Silver' || member.membership === 'Gold');
    
    // Randomly select two or three members
    const spotlightMembers = [];
    while (spotlightMembers.length < 2 && qualifiedMembers.length > 0) {
      const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
      const randomMember = qualifiedMembers.splice(randomIndex, 1)[0];
      spotlightMembers.push(randomMember);
    }
    
    // Display spotlight advertisements on the home page
    const spotlightContainer = document.getElementById('spotlight');
    spotlightMembers.forEach(member => {
      const spotlightAd = document.createElement('div');
      spotlightAd.classList.add('spotlight-ad');
      spotlightAd.innerHTML = `
        <img class="company-icon" src="images/${member.icon}" alt="${member.companyName}" loading="lazy">
        <h3>${member.companyName}</h3>
        <p>${member.address}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;
      spotlightContainer.appendChild(spotlightAd);
    });
  })
  .catch(error => console.error('Error fetching member data:', error));


//Banner
const currentDate = new Date();
const currentDay = currentDate.getDay(); 
const bannerContainer = document.getElementById('banner');
if (currentDay >= 1 && currentDay <= 3) {
  const banner = document.createElement('div');
  banner.classList.add('banner-content');
  banner.innerHTML = `
    <p>Join us for our chamber's meet and greet on Wednesday at 7:00 p.m.! <a href="#">Learn more.<a></p>
  `;
  const closeButton = document.createElement('button');
  closeButton.classList.add('banner-close')
  closeButton.innerHTML = '✖';
  closeButton.addEventListener('click', () => {
    banner.remove();
  });

  banner.appendChild(closeButton);
  bannerContainer.appendChild(banner);
  ;
}