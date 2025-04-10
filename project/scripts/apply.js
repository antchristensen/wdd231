document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("jobApplicationForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("fullName").value.trim();
  
      
      window.location.href = `apply-confirmation.html?name=${encodeURIComponent(name)}`;
    });
  });
  