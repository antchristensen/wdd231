document.addEventListener("DOMContentLoaded", () => {
  async function loadProjects() {
    try {
      const res = await fetch('data/projects.json');
      const data = await res.json();

      const container = document.getElementById('projectContainer');
      const modal = document.getElementById('modal');
      const modalTitle = document.getElementById('modal-title');
      const modalImage = document.getElementById('modal-image');
      const modalDetails = document.getElementById('modal-details');
      const closeBtn = document.querySelector('.close');

      data.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project');

        card.innerHTML = `
          <img src="${project.image}" alt="${project.alt}" loading="lazy">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <button class="learn-more-btn">Learn More</button>
        `;

        const btn = card.querySelector('.learn-more-btn');
        btn.addEventListener('click', () => {
          modalTitle.textContent = project.title;
          modalImage.src = project.image;
          modalImage.alt = project.alt;
          modalDetails.textContent = project.details;
          modal.style.display = 'block';
        });

        container.appendChild(card);
      });

      closeBtn.onclick = () => {
        modal.style.display = 'none';
      };

      window.onclick = (e) => {
        if (e.target == modal) {
          modal.style.display = 'none';
        }
      };
    } catch (err) {
      console.error('Error loading project data:', err);
    }
  }

  loadProjects(); // call the async function
});
