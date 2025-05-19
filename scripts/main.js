// Navigation active state
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight/3) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Mobile menu toggle
const mobileMenu = () => {
    const burger = document.createElement('div');
    burger.classList.add('mobile-menu');
    burger.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.nav-container').appendChild(burger);

    burger.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('show');
    });
}

// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
    mobileMenu();
    
    // Add smooth scroll to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});