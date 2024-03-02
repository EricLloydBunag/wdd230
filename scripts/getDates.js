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
