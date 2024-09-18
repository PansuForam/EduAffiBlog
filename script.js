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

