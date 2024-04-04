const baseURL = "https://ericlloydbunag.github.io/wdd230/";
const linksURL = "https://ericlloydbunag.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(data) {
    const weeks = data.weeks;
    let listHTML = '';

    weeks.forEach(week => {
        const weekNumber = week.week;
        const links = week.links;
        let linkHTML = [];

        links.forEach(link => {
            const linkTitle = link.title;
            const linkURL = link.url;
            linkHTML.push(`<a href="${linkURL}">${linkTitle}</a>`);
        });

        listHTML += `<li>${weekNumber}: [${linkHTML.join('][')}]</li>`;
    });

    const activityList = document.querySelector('.cards .card ol');
    activityList.innerHTML = listHTML;
}getLinks();
