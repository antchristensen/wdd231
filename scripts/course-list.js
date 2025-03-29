document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        {
            code: "CSE 110",
            title: "Introduction to Programming",
            category: "CSE",
            credits: 3,
            description: "Learn programming fundamentals using problem-solving techniques.",
            certificate: "Web and Computer Programming",
            techStack: "Python"
        },
        {
            code: "WDD 130",
            title: "Web Fundamentals",
            category: "WDD",
            credits: 3,
            description: "Covers basic HTML and CSS to build static web pages.",
            certificate: "Web and Computer Programming",
            techStack: "HTML, CSS"
        },
        {
            code: "CSE 111",
            title: "Programming with Functions",
            category: "CSE",
            credits: 3,
            description: "Build on Python skills to write modular and reusable code.",
            certificate: "Web and Computer Programming",
            techStack: "Python"
        },
        {
            code: "CSE 210",
            title: "Object-Oriented Programming",
            category: "CSE",
            credits: 4,
            description: "Design and build object-oriented applications.",
            certificate: "Web and Computer Programming",
            techStack: "Python, OOP"
        },
        {
            code: "WDD 131",
            title: "Dynamic Web Fundamentals",
            category: "WDD",
            credits: 3,
            description: "Learn basic JavaScript and DOM manipulation.",
            certificate: "Web and Computer Programming",
            techStack: "HTML, CSS, JavaScript"
        },
        {
            code: "WDD 231",
            title: "Front-end Development I",
            category: "WDD",
            credits: 3,
            description: "Build responsive websites using advanced CSS and JS.",
            certificate: "Web and Computer Programming",
            techStack: "HTML, CSS, JavaScript"
        }
    ];

    const courseListContainer = document.querySelector(".course-list");
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const totalCreditsDisplay = document.createElement("p");
    totalCreditsDisplay.textContent = "Total Credits: 0";
    document.querySelector(".certificate").appendChild(totalCreditsDisplay);

    let selectedCourses = [];

    function displayCourses(filter) {
        courseListContainer.innerHTML = "";

        courses.forEach(course => {
            if (filter === "All" || course.category === filter) {
                const button = document.createElement("button");
                button.textContent = course.code;
                button.dataset.credits = course.credits;

                button.addEventListener("click", function () {
                    showCourseModal(course);
                });

                courseListContainer.appendChild(button);
            }
        });
    }

    function updateTotalCredits() {
        const totalCredits = selectedCourses.reduce((sum, course) => sum + course.credits, 0);
        totalCreditsDisplay.textContent = `Total Credits: ${totalCredits}`;
    }

    function showCourseModal(course) {
        const dialog = document.getElementById("courseDialog");

        dialog.innerHTML = `
            <h3>${course.code} - ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Certificate:</strong> ${course.certificate}</p>
            <p><strong>Technology Stack:</strong> ${course.techStack}</p>
            <button id="closeDialog">Close</button>
        `;

        dialog.showModal();

        dialog.querySelector("#closeDialog").addEventListener("click", () => {
            dialog.close();
        });

        dialog.addEventListener("click", function outsideClick(event) {
            if (event.target === dialog) {
                dialog.close();
                dialog.removeEventListener("click", outsideClick);
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            displayCourses(this.textContent);
        });
    });

    displayCourses("All");
});
