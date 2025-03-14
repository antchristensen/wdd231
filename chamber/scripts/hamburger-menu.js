document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");


    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });


    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });
});
