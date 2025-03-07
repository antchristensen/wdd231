document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        { code: "CSE 110", category: "CSE", credits: 2, completed: true },
        { code: "WDD 130", category: "WDD", credits: 2, completed: true },
        { code: "CSE 111", category: "CSE", credits: 2, completed: true },
        { code: "CSE 210", category: "CSE", credits: 2, completed: true },
        { code: "WDD 131", category: "WDD", credits: 2, completed: true },
        { code: "WDD 231", category: "WDD", credits: 2, completed: false }
    ];

    const courseListContainer = document.querySelector(".course-list");
    const filterButtons = document.querySelectorAll(".filter-buttons button");

    function displayCourses(filter) {
        courseListContainer.innerHTML = ""; 

        courses.forEach(course => {
            if (filter === "All" || course.category === filter) {
                const button = document.createElement("button");
                button.textContent = course.code;
                button.dataset.credits = course.credits; 

                if (course.completed) {
                    button.classList.add("completed");
                    button.textContent += " ✅"; 
                }

                courseListContainer.appendChild(button);
            }
        });
    }

    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            displayCourses(this.textContent); 
        });
    });

    displayCourses("All"); 
});
