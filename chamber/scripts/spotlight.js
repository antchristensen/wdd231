document.addEventListener("DOMContentLoaded", async () => {
    const spotlightContainer = document.querySelector(".spotlights");

    try {

        const response = await fetch("data/members.json");
        const members = await response.json();

        // Membership Level Mapping
        const membershipLevels = {
            3: "Gold",
            2: "Silver",
            1: "Bronze"
        };


        const eligibleMembers = members.filter(member =>
            member.membership === 3 || member.membership === 2
        );

        if (eligibleMembers.length === 0) {
            console.warn("No Gold or Silver members found.");
            return;
        }


        const shuffledMembers = eligibleMembers.sort(() => 0.5 - Math.random());
        const selectedMembers = shuffledMembers.slice(0, 3);

        
        spotlightContainer.innerHTML = selectedMembers.map(member => `
            <div class="spotlight">
                <img src="images/${member.image}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <a href="${member.website}" class="btn" target="_blank">Visit Website</a>
                <p class="membership-level ${membershipLevels[member.membership].toLowerCase()}">
                    ${membershipLevels[member.membership]} Member
                </p>
            </div>
        `).join("");

        console.log("Spotlight members loaded successfully:", selectedMembers);

    } catch (error) {
        console.error("Error loading chamber members:", error);
        spotlightContainer.innerHTML = "<p>Unable to load spotlights at this time.</p>";
    }
});
