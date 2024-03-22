const visitsDisplay = document.querySelector(".visits");
let visitCount = Number(window.localStorage.getItem("visitCount-ls")) || 0;

if (visitCount !== 0) {
	visitsDisplay.textContent = visitCount;
} else {
	visitsDisplay.textContent = `Welcome!`;
}

visitCount++;

localStorage.setItem("visitCount-ls", visitCount);