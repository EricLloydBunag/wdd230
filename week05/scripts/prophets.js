const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data.prophets);
        displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let bio = document.createElement('p');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        bio.textContent = `Date of Birth: ${prophet.birthdate}\nPlace of Birth: ${prophet.birthplace}`
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.fullName}.`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '150');
        portrait.setAttribute('height', '225');

        card.appendChild(fullName);
        card.appendChild(bio);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();