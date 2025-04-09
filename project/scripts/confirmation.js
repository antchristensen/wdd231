document.addEventListener("DOMContentLoaded", function () {
    function getQueryParam(param) {
        let urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    
    document.getElementById("confirmName").textContent = getQueryParam("name") || "N/A";
    document.getElementById("confirmEmail").textContent = getQueryParam("email") || "N/A";
    document.getElementById("confirmMessage").textContent = getQueryParam("message") || "N/A";


    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    let submissionList = document.getElementById("previousSubmissions");

    submissions.forEach(submission => {
        let listItem = document.createElement("li");
        listItem.textContent = `${submission.name} (${submission.email}): ${submission.message}`;
        submissionList.appendChild(listItem);
    });
});