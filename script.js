// Function to show the selected page and hide others
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}

// Add click event to the logo
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', function() {
        alert('Welcome to Bike Company!');
    });
});

// Add smooth scrolling to internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect to bike items
const bikeItems = document.querySelectorAll('.bike-item');
bikeItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add form validation for a contact form (assuming you add one in the future)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form validation logic here
        console.log('Form submitted');
    });
}

// Add a simple animation to the page title
function animateTitle() {
    const title = document.querySelector('h1');
    if (title) {
        title.style.opacity = '0';
        let opacity = 0;
        const fadeIn = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(fadeIn);
            }
            title.style.opacity = opacity;
            opacity += 0.1;
        }, 100);
    }
}

// Call the animation function when the page loads
document.addEventListener('DOMContentLoaded', animateTitle);

// Add a scroll-to-top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.style.padding = '10px';
scrollToTopBtn.style.backgroundColor = '#0066cc';
scrollToTopBtn.style.color = 'white';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '50%';
scrollToTopBtn.style.cursor = 'pointer';

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});