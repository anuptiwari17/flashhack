/* Base Styles and CSS Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #4361ee;
    --secondary-color: #3f37c9;
    --accent-color: #4cc9f0;
    --text-color: #333;
    --light-text: #f8f9fa;
    --dark-bg: #212529;
    --light-bg: #ffffff;
    --gray-bg: #f8f9fa;
    --border-color: #dee2e6;
    --border-radius: 8px;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--light-bg);
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

section {
    padding: 80px 0;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin-bottom: 15px;
}

p {
    margin-bottom: 15px;
}

a {
    text-decoration: none;
    color: var(--primary-color);
    transition: var(--transition);
}

a:hover {
    color: var(--secondary-color);
}

.section-title {
    text-align: center;
    margin-bottom: 50px;
    font-size: 2.5rem;
    position: relative;
    padding-bottom: 15px;
}

.section-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: var(--primary-color);
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 12px 25px;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    font-weight: bold;
    font-size: 1rem;
}

.primary-btn {
    background-color: var(--primary-color);
    color: white;
}

.primary-btn:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.secondary-btn {
    background-color: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

.secondary-btn:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-2px);
}

/* Header Styles */
header {
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.logo h1 {
    font-size: 1.8rem;
    margin: 0;
    color: var(--primary-color);
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 25px;
}

nav ul li a {
    color: var(--text-color);
    font-weight: 500;
    padding: 8px 0;
    position: relative;
}

nav ul li a:hover, nav ul li a.active {
    color: var(--primary-color);
}

nav ul li a.active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary-color);
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--text-color);
}

/* Hero Section */
.hero {
    padding: 100px 0;
}

.hero .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.hero-content {
    flex: 1;
    padding-right: 50px;
}

.hero-content h2 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: var(--dark-bg);
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #666;
}

.cta-buttons {
    display: flex;
    gap: 15px;
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
}

.placeholder-img {
    width: 100%;
    height: 350px;
    background-color: #e9ecef;
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #adb5bd;
    font-size: 1.2rem;
}



/* Features Section */
.features {
    background-color: var(--gray-bg);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.feature-card {
    background-color: white;
    padding: 30px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    text-align: center;
    transition: var(--transition);
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.feature-icon {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 20px;
}

.feature-card h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
}

/* About Section */
.about-content {
    display: flex;
    align-items: center;
    gap: 50px;
}

.about-text, .about-image {
    flex: 1;
}

.about-text p {
    margin-bottom: 20px;
    font-size: 1.1rem;
}

/* Contact Form */
.contact {
    background-color: var(--gray-bg);
}

#contact-form {
    max-width: 600px;
    margin: 0 auto;
    background-color: white;
    padding: 40px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
}

.form-group input, .form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: 1rem;
    transition: var(--transition);
}

.form-group input:focus, .form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
}

/* Footer */
footer {
    background-color: var(--dark-bg);
    color: var(--light-text);
    padding: 40px 0;
}

footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.social-links {
    display: flex;
    gap: 15px;
}

.social-links a {
    color: var(--light-text);
    font-size: 1.2rem;
    transition: var(--transition);
}

.social-links a:hover {
    color: var(--accent-color);
    transform: translateY(-3px);
}

/* Responsive Design */
@media (max-width: 992px) {
    .hero .container, .about-content {
        flex-direction: column;
        text-align: center;
    }

    .hero-content, .about-text {
        padding-right: 0;
        margin-bottom: 40px;
    }
}

@media (max-width: 768px) {
    nav ul {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: white;
        flex-direction: column;
        padding: 20px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    nav ul.active {
        display: flex;
    }

    nav ul li {
        margin: 10px 0;
    }

    .mobile-menu-btn {
        display: block;
    }

    .cta-buttons {
        justify-content: center;
    }

    .section-title {
        font-size: 2rem;
    }

    .feature-card {
        padding: 20px;
    }
}

@media (max-width: 576px) {
    .hero-content h2 {
        font-size: 2.2rem;
    }

    section {
        padding: 60px 0;
    }

    #contact-form {
        padding: 20px;
    }
}
