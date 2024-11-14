// Smooth scroll function for navigation buttons
function goToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Function to download resume
function downloadResume() {
    window.location.href = "resume.pdf";  // Ensure "resume.pdf" is in the same directory
}

// Fade-in sections on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
});