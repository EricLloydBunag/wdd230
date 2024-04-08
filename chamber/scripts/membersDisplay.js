/*async function getMemberData() {
    const response = await fetch('https://ericlloydbunag.github.io/wdd230/chamber/data/members.json');
    const data = await response.json();
    console.table(data.members);
}

getMemberData();*/

const url = 'https://ericlloydbunag.github.io/wdd230/chamber/data/members.json';

document.addEventListener('DOMContentLoaded', function() {
    const memberContainer = document.getElementById('member-cards');

    // Fetch member data from JSON file
    fetch(url) // Pass the correct URL to fetch member data
        .then(response => response.json())
        .then(data => {
            // Generate HTML for each member
            data.members.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('member-card');
                memberCard.innerHTML = `
                    <img src="images/${member.icon}" alt="${member.companyName}'s logo.">
                    <h3>${member.companyName}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Website</a>
                    <p>Membership Level: ${member.membership}</p>
                `;

                memberContainer.appendChild(memberCard);
            });
        })
        .catch(error => console.error('Error fetching member data:', error));
});

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#member-cards");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", () =>{
    display.classList.add("list");
	display.classList.remove("grid");
});