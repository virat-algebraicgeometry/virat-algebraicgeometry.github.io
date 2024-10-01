// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    
    // Add click event listeners to each link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove("active"));
            // Add active class to the clicked link
            this.classList.add("active");
        });
    });

    // Smooth scrolling to sections
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default anchor behavior
            const targetId = this.getAttribute("href"); // Get the target section ID
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: "smooth", // Enable smooth scrolling
                block: "start" // Scroll to the start of the section
            });
        });
    });
});
