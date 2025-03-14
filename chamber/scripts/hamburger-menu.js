document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // Toggle Menu on Click
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Close Menu When Clicking Outside (Optional)
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });
});
