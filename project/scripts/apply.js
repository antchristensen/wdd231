document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("jobApplicationForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("fullName").value.trim();
  
      // Redirect to confirmation page with name in query string
      window.location.href = `apply-confirmation.html?name=${encodeURIComponent(name)}`;
    });
  });
  