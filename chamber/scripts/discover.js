const visitMessage = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (days < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else {
    visitMessage.textContent = `You last visited ${days} day${days === 1 ? "" : "s"} ago.`;
  }
}

localStorage.setItem('lastVisit', now);


fetch('data/discover.json')
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector('.cards-container');
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure><img src="${item.image}" alt="${item.name}"></figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;
      container.appendChild(card);
    });
  });
