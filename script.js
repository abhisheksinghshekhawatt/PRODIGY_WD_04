// script.js - This script loads content dynamically into the content div based on the clicked link
document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.querySelector(".content");
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const pageURL = this.getAttribute("href");
            loadPage(pageURL);
        });
    });

    function loadPage(url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                contentDiv.innerHTML = html;
                document.title = document.querySelector("h1").innerText + " - John Doe";
                window.history.pushState({ path: url }, '', url);
            })
            .catch(error => console.error('Error loading page:', error));
    }

    // Load the default page (index.html) when the website is first loaded
    
});

