//contains weatherNow, lastModified, hamburgerMenu, darkmode 

//hamburgerMenu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('open');
        hamButton.classList.remove('open');
    });
});

/*//darkMode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌑")) {
		body.main.style.background = '';
		main.style.color = "aliceblue";
		modeButton.textContent = "☀️";
	} else {
		main.style.background = "gray";
		main.style.color = "aliceblue";
		modeButton.textContent = "🌑";
	}
});*/


//copyrightYear and lastModified
function updateCopyrightYear(){
    const copyrightYear = document.getElementById('copyrightYear')
    copyrightYear.textContent = new Date().getFullYear();;
}

function updateLastModifiedDate() {
    const lastModified = document.getElementById('lastModified');
        lastModified.textContent = document.lastModified;
}

updateCopyrightYear();
updateLastModifiedDate();


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
  dots[slideIndex-1].className += " active";
}