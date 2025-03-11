document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        { code: "CSE 110", category: "CSE", credits: 3 },
        { code: "WDD 130", category: "WDD", credits: 3 },
        { code: "CSE 111", category: "CSE", credits: 3 },
        { code: "CSE 210", category: "CSE", credits: 4 },
        { code: "WDD 131", category: "WDD", credits: 3 },
        { code: "WDD 231", category: "WDD", credits: 3 }
    ];

    const courseListContainer = document.querySelector(".course-list");
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const totalCreditsDisplay = document.createElement("p");
    totalCreditsDisplay.textContent = "Total Credits: 0";
    document.querySelector(".certificate").appendChild(totalCreditsDisplay);

    let selectedCourses = [];

    function displayCourses(filter) {
        courseListContainer.innerHTML = ""; // Clear course list

        courses.forEach(course => {
            if (filter === "All" || course.category === filter) {
                const button = document.createElement("button");
                button.textContent = course.code;
                button.dataset.credits = course.credits; // Store credits in dataset

                // Toggle selection on click
                button.addEventListener("click", function () {
                    const courseIndex = selectedCourses.findIndex(c => c.code === course.code);
                    
                    if (courseIndex === -1) {
                        selectedCourses.push(course); // Add course if not already selected
                        this.classList.add("selected");
                    } else {
                        selectedCourses.splice(courseIndex, 1); // Remove course if already selected
                        this.classList.remove("selected");
                    }

                    updateTotalCredits();
                });

                courseListContainer.appendChild(button);
            }
        });
    }

    function updateTotalCredits() {
        // Use reduce() to sum the credits of selected courses
        const totalCredits = selectedCourses.reduce((sum, course) => sum + course.credits, 0);
        totalCreditsDisplay.textContent = `Total Credits: ${totalCredits}`;
    }

    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            displayCourses(this.textContent); // Filter courses
        });
    });

    displayCourses("All"); // Show all courses by default
});
