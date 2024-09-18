// Select elements
const menuButton = document.querySelector('.menu-button');
const dropdownMenu = document.querySelector('.dropdown-menu');
const closeButton = document.querySelector('.menu-close');

// Function to open the dropdown menu
function openMenu() {
    dropdownMenu.classList.add('show');
    dropdownMenu.classList.remove('hide');
}

// Function to close the dropdown menu
function closeMenu() {
    dropdownMenu.classList.add('hide');
    dropdownMenu.classList.remove('show');

    // Wait for the animation to finish before hiding it completely
    setTimeout(() => {
        dropdownMenu.style.display = 'none';
    }, 300); // Match this duration with the CSS transition duration
}

// Event listeners
menuButton.addEventListener('click', () => {
    dropdownMenu.style.display = 'block'; // Show the menu first
    openMenu(); // Then apply the show class for animation
});

closeButton.addEventListener('click', () => {
    closeMenu();
});

// Optional: Close the menu when clicking outside of it
document.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        closeMenu();
    }
});

//testimonials
const testimonialContainer = document.querySelector('.testimonial-container');
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

// Update the slider position
function updateSlider() {
    testimonialContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Touch event variables
let startX = 0;
let endX = 0;

// Detect touch start
testimonialContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

// Detect touch movement
testimonialContainer.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

// Detect touch end and calculate swipe direction
testimonialContainer.addEventListener('touchend', () => {
    if (startX > endX + 50) {
        // Swipe left
        if (currentIndex < totalTestimonials - 1) {
            currentIndex++;
        }
    } else if (startX < endX - 50) {
        // Swipe right
        if (currentIndex > 0) {
            currentIndex--;
        }
    }
    updateSlider(); // Update the slider after swiping
});

// Optional: Keep buttons working on larger screens
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

if (prevButton && nextButton) {
    nextButton.addEventListener('click', () => {
        if (currentIndex < totalTestimonials - 1) {
            currentIndex++;
        }
        updateSlider();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        }
        updateSlider();
    });
}

// Hide testimonials on small screens
function handleResize() {
    if (window.innerWidth < 768) {
        testimonialContainer.style.display = 'none'; // Hide on small screens
    } else {
        testimonialContainer.style.display = ''; // Show on larger screens
    }
}

// Initial check
handleResize();

// Check on window resize
window.addEventListener('resize', handleResize);


document.getElementById('newsletter-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const confirmationMessage = document.getElementById('confirmation-message');
    const errorMessage = document.getElementById('error-message');

    // Reset messages
    confirmationMessage.classList.add('hidden');
    errorMessage.classList.add('hidden');

    // Validate email
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.classList.remove('hidden');
        return;
    }

    try {
        // Mock API call
        await mockApiCall(email);
        confirmationMessage.textContent = `Thank you for subscribing with ${email}!`;
        confirmationMessage.classList.remove('hidden');
        emailInput.value = ''; // Clear the input field
    } catch (error) {
        errorMessage.textContent = 'Subscription failed. Please try again later.';
        errorMessage.classList.remove('hidden');
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Mock API call function
function mockApiCall(email) {
    return new Promise((resolve, reject) => {
        // Simulate network delay
        setTimeout(() => {
            const isSuccess = Math.random() > 0.2; // 80% success rate
            isSuccess ? resolve() : reject();
        }, 1000);
    });
}
