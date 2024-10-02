// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("Virat's Math Website Loaded Successfully");

    // Smooth scroll for anchor links
    const smoothScroll = () => {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetID = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetID);
                
                // Scroll to target element smoothly
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // Call smooth scrolling functionality
    smoothScroll();

    // Highlight active section in the navigation bar
    const highlightActiveSection = () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');

        window.addEventListener('scroll', () => {
            let current = "";

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 50) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    };

    // Call active section highlight functionality
    highlightActiveSection();
});

/* Future Enhancements (Placeholder Code) */

// Dark Mode Toggle
// const darkModeToggle = () => {
//     const toggle = document.getElementById('dark-mode-toggle');
//     toggle.addEventListener('click', () => {
//         document.body.classList.toggle('dark-mode');
//     });
// };

// Collapsible Sections for Long Content
// const collapsibleSections = () => {
//     const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
//     collapsibleHeaders.forEach(header => {
//         header.addEventListener('click', function () {
//             this.classList.toggle('active');
//             const content = this.nextElementSibling;
//             if (content.style.maxHeight) {
//                 content.style.maxHeight = null;
//             } else {
//                 content.style.maxHeight = content.scrollHeight + "px";
//             }
//         });
//     });
// };
