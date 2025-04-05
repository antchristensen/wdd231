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

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close");


closeBtn.onclick = () => {
  modal.style.display = "none";
};


window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};


fetch('data/discover.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.cards-container');

    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure><img src="${item.image}" alt="${item.name}" loading="lazy"></figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button class="learn-more-btn">Learn More</button>
      `;

      const button = card.querySelector('.learn-more-btn');
      button.addEventListener('click', () => {
        document.getElementById("modal-title").textContent = item.name;
        document.getElementById("modal-hours").textContent = item.hours;
        const modalLink = document.getElementById("modal-link");
        modalLink.href = item.link;
        modalLink.textContent = "Visit Official Site";
        document.getElementById("modal").style.display = "block";
      });

      container.appendChild(card);
    });
  });

