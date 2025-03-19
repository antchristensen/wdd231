document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (!menuToggle || !navMenu) {
        console.error("Menu elements not found!");
        return;
    }

    menuToggle.addEventListener("click", function () {
        console.log("Hamburger menu clicked!");
        navMenu.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            console.log("Click outside detected. Closing menu.");
            navMenu.classList.remove("active");
        }
    });
});
