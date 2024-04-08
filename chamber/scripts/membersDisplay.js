const baseURL = "https://ericlloydbunag.github.io/wdd230/";
const linksURL = "https://ericlloydbunag.github.io/wdd230/chamber/data/links.json";


// JavaScript code to fetch and display member information
document.addEventListener('DOMContentLoaded', function() {
    const memberContainer = document.getElementById('member-container');

    // Fetch member data from JSON file
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            // Generate HTML for each member
            data.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('member-card');
                memberCard.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Website</a>
                    <p>Membership Level: ${member.membership_level}</p>
                    <p>${member.other_information}</p>
                `;
                memberContainer.appendChild(memberCard);
            });
        })
        .catch(error => console.error('Error fetching member data:', error));
});