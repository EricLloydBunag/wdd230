const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//Dark-mode

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌑")) {
		main.style.background = '#1E1923';
		main.style.color = "aliceblue";
		modeButton.textContent = "☀️";
	} else {
		main.style.background = "gray";
		main.style.color = "aliceblue";
		modeButton.textContent = "🌑";
	}
});