document.addEventListener("DOMContentLoaded", () => {
    async function loadTestimonials() {
      try {
        const response = await fetch("data/testimonials.json");
        const data = await response.json();
        const container = document.getElementById("testimonialContainer");
  
        data.forEach(({ name, location, review }) => {
          const card = document.createElement("div");
          card.classList.add("project"); // reusing project-style card
  
          card.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Location:</strong> ${location}</p>
            <p>"${review}"</p>
          `;
  
          container.appendChild(card);
        });
      } catch (err) {
        console.error("Error loading testimonials:", err);
      }
    }
  
    loadTestimonials();
  });
  