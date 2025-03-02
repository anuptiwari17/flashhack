
document.addEventListener('DOMContentLoaded', function() {
    
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
   
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            if (this.hash !== '') {
                e.preventDefault();
                
                const hash = this.hash;
                
               
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update active link
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
                
                // Update URL without page reload
                history.pushState(null, null, hash);
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to your backend
            console.log('Form submitted:', {
                name,
                email,
                message
            });
            
            // Show success message (replace with your preferred method)
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Add scroll event to change header style
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
                header.style.padding = '10px 0';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                header.style.padding = '20px 0';
            }
        });
    }
    
    // Function to check which section is in view and update active menu item
    function updateActiveSection() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100; // Offset to trigger slightly before reaching section
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section link
                const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Update active section on scroll
    window.addEventListener('scroll', updateActiveSection);
    
    // Initialize with current section
    updateActiveSection();
});

// Add animation on scroll (simple implementation)
// You could replace this with a library like AOS (Animate On Scroll) for more advanced animations
window.addEventListener('scroll', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .about-content, #contact-form');
    
    animatedElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});

// You can add your API communication functions here
function fetchDataFromAPI(endpoint) {
    return fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

// Example function to send data to your API
function sendDataToAPI(endpoint, data) {
    return fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Submit error:', error);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    // Get the "Get Started" button from your main page
    const getStartedBtn = document.querySelector('.primary-btn');
    
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            // Navigate to the cards dashboard page
            window.location.href = 'main.html';
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the "Get Started" button from your main page
    const getStartedBtn = document.querySelector('.secondary-btn');
    
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            // Navigate to the cards dashboard page
            window.location.href = 'login.html';
        });
    }
});
