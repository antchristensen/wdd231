document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // Check if the elements exist before proceeding
    if (!menuToggle || !navMenu) {
        console.warn("Menu elements not found on this page.");
        return;
    }

    // Toggle menu on hamburger click
    menuToggle.addEventListener("click", function () {
        console.log("Hamburger menu clicked!");
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking outside of menu or button
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            console.log("Click outside detected. Closing menu.");
            navMenu.classList.remove("active");
        }
    });
});
