const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';


const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        
        const data = await response.json();
        
        displayProphets(data.prophets);
    } catch (error) {
        console.error("Error fetching prophet data:", error);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

        let card = document.createElement('section');
        card.classList.add('card');

        let fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        let birthDate = document.createElement('p');
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;

        let birthPlace = document.createElement('p');
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        let portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy'); 
        portrait.setAttribute('width', '200'); 
        portrait.setAttribute('height', '250'); 

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};

getProphetData();

