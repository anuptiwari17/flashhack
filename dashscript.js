document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('cardModal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.querySelector('.modal-title');
    const modalImage = document.querySelector('.modal-image');
    const modalDescription = document.querySelector('.modal-description');
    const modalDetailsList = document.getElementById('modalDetailsList');
    const backButton = document.querySelector('.btn-secondary');
    const searchInput = document.querySelector('.search-bar input');
    
    // Category details data
    const categoryDetails = {
        1: {
            title: "Web Development",
            description: "Web development is the process of building and maintaining websites. It encompasses several different aspects, including web design, web publishing, web programming, and database management. From simple static websites to complex web applications, web development covers everything in between.",
            learningPoints: [
                "HTML, CSS, and JavaScript fundamentals",
                "Responsive design principles",
                "Frontend frameworks like React, Vue, or Angular",
                "Backend development with Node.js, Python, or PHP",
                "Database design and management",
                "Authentication and authorization",
                "API development and integration",
                "Deployment and hosting strategies"
            ]
        },
        2: {
            title: "Mobile App Development",
            description: "Mobile app development involves creating software applications that run on mobile devices. These apps can be pre-installed on phones or delivered as web applications. The main platforms are iOS and Android, and you can develop native apps for each platform or use cross-platform frameworks.",
            learningPoints: [
                "Mobile UI/UX design principles",
                "React Native for cross-platform development",
                "Flutter and Dart programming",
                "Native iOS development with Swift",
                "Native Android development with Kotlin",
                "Mobile app architecture patterns",
                "Working with device APIs and sensors",
                "App store submission and distribution"
            ]
        },
        3: {
            title: "Data Science",
            description: "Data science combines domain expertise, programming skills, and knowledge of mathematics and statistics to extract meaningful insights from data. Data scientists analyze complex data to help organizations make better decisions and create new products and services.",
            learningPoints: [
                "Data collection and cleaning techniques",
                "Statistical analysis and hypothesis testing",
                "Python programming for data analysis",
                "Data visualization with libraries like Matplotlib and Seaborn",
                "Machine learning fundamentals",
                "Working with big data technologies",
                "Creating interactive dashboards",
                "Communicating insights effectively"
            ]
        },
        4: {
            title: "Machine Learning",
            description: "Machine learning is a subset of artificial intelligence that gives systems the ability to learn and improve from experience without being explicitly programmed. ML algorithms build mathematical models based on sample data to make predictions or decisions without being specifically programmed to do so.",
            learningPoints: [
                "Supervised and unsupervised learning",
                "Neural networks and deep learning",
                "Natural language processing",
                "Computer vision applications",
                "Reinforcement learning",
                "Model evaluation and validation",
                "Feature engineering",
                "ML model deployment and monitoring"
            ]
        },
        5: {
            title: "UI/UX Design",
            description: "UI/UX design focuses on creating meaningful and relevant experiences for users. UI (User Interface) design is about the look and feel, while UX (User Experience) design is about the overall experience of a product. Together, they help create products that are both aesthetically pleasing and functionally efficient.",
            learningPoints: [
                "User research and personas",
                "Information architecture",
                "Wireframing and prototyping",
                "Visual design principles",
                "Design systems and component libraries",
                "Usability testing",
                "Accessibility standards",
                "Design tools like Figma, Sketch, and Adobe XD"
            ]
        },
        6: {
            title: "Blockchain",
            description: "Blockchain is a distributed ledger technology that allows multiple parties to have simultaneous access to a constantly updated digital ledger that is secure and immutable. It's the technology behind cryptocurrencies like Bitcoin, but its applications extend far beyond digital currencies.",
            learningPoints: [
                "Blockchain fundamentals and consensus mechanisms",
                "Smart contract development",
                "Ethereum and Solidity programming",
                "Web3 and decentralized applications (dApps)",
                "Tokenomics and cryptocurrency basics",
                "NFTs and digital assets",
                "Security considerations in blockchain",
                "Integration with traditional systems"
            ]
        }
    };
    
    // Function to open modal with category details
    function openModal(categoryId) {
        const category = categoryDetails[categoryId];
        
        if (!category) return;
        
        // Update modal content
        modalTitle.textContent = category.title;
        modalImage.textContent = `${category.title} Image`;
        
        // Set description
        const descriptionHTML = `<p>${category.description}</p>`;
        modalDescription.innerHTML = descriptionHTML;
        
        // Clear and update learning points
        modalDetailsList.innerHTML = '';
        category.learningPoints.forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            modalDetailsList.appendChild(li);
        });
        
        // Show modal
        modal.classList.add('active');
        
        // Prevent body scrolling when modal is open
        document.body.style.overflow = 'hidden';
    }
    
    // Function to close modal
    function closeModalFunction() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Add event listeners to cards
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryId = this.getAttribute('data-id');
            openModal(categoryId);
        });
    });
    
    // Close modal when clicking the close button
    closeModal.addEventListener('click', closeModalFunction);
    
    // Close modal when clicking the back button
    backButton.addEventListener('click', closeModalFunction);
    
    // Close modal when clicking outside of it
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunction();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModalFunction();
        }
    });
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const description = card.querySelector('.card-description').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Link from main page - this would be on your home page to redirect to the cards dashboard
    // For demonstration purposes, this is how you'd link to this page from your main site
    function setupMainPageLink() {
        // This would be on your index.html page, not needed in this file
        const getStartedBtn = document.querySelector('.primary-btn');
        if (getStartedBtn) {
            getStartedBtn.addEventListener('click', function() {
                window.location.href = 'cards-dashboard.html';
            });
        }
    }
});