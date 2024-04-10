//contains weatherNow, lastModified, hamburgerMenu 

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