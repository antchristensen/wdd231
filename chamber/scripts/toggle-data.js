document.addEventListener("DOMContentLoaded", async function () {
    const directory = document.getElementById("directory");
    const gridViewBtn = document.getElementById("gridView");
    const listViewBtn = document.getElementById("listView");

    let businesses = [];

    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            businesses = await response.json();
            renderDirectory("grid"); 
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    function renderDirectory(viewType) {
        directory.innerHTML = "";
        directory.classList.remove("grid-view", "list-view");
        directory.classList.add(viewType === "grid" ? "grid-view" : "list-view");

        businesses.forEach((biz) => {
            const memberDiv = document.createElement("div");
            memberDiv.classList.add("member");

            let membershipBadge = biz.membership === 3 ? "🥇 Gold Member" :
                                  biz.membership === 2 ? "🥈 Silver Member" : "🥉 Member";

            if (viewType === "grid") {
                memberDiv.innerHTML = `
                    <img src="images/${biz.image}" alt="${biz.name}">
                    <h3>${biz.name}</h3>
                    <p><strong>${membershipBadge}</strong></p>
                    <p>${biz.description}</p>
                    <p>${biz.address}</p>
                    <p>${biz.phone}</p>
                    <a href="${biz.website}" target="_blank">Visit Website</a>
                `;
            } else {
                memberDiv.innerHTML = `
                    <h3>${biz.name} - ${membershipBadge}</h3>
                    <p>${biz.description}</p>
                    <p>${biz.address} | ${biz.phone}</p>
                    <a href="${biz.website}" target="_blank">Visit Website</a>
                `;
            }

            directory.appendChild(memberDiv);
        });
    }

    gridViewBtn.addEventListener("click", () => renderDirectory("grid"));
    listViewBtn.addEventListener("click", () => renderDirectory("list"));

    fetchMembers();
});
