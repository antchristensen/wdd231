document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); 


        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;


        let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
        submissions.push({ name, email, message }); 
        localStorage.setItem("submissions", JSON.stringify(submissions));


        window.location.href = `confirmation.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`;
    });
});