document.addEventListener("DOMContentLoaded", () => {
    const directory = document.getElementById("directory");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");

    async function loadMembers(view = "grid") {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members, view);
        } catch (error) {
            console.error("Error loading members:", error);
        }
    }

    function displayMembers(members, view) {
        directory.innerHTML = "";
        directory.className = view;

        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card");
            
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} Logo">
                <h2>${member.name}</h2>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p class="membership">Membership Level: ${getMembershipLevel(member.membership)}</p>
            `;

            directory.appendChild(card);
        });
    }

    function getMembershipLevel(level) {
        return ["Member", "Silver", "Gold"][level - 1] || "Unknown";
    }

    gridViewBtn.addEventListener("click", () => loadMembers("grid"));
    listViewBtn.addEventListener("click", () => loadMembers("list"));

    loadMembers();
});
