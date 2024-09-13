const testimonialContainer = document.querySelector('.testimonial-container');
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function updateSlider() {
    testimonialContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Handle swipe on small screens
let startX = 0;
let endX = 0;

testimonialContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

testimonialContainer.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

testimonialContainer.addEventListener('touchend', () => {
    if (startX > endX + 50) {
        currentIndex = (currentIndex + 1) % totalTestimonials; // Swipe left
    } else if (startX < endX - 50) {
        currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials; // Swipe right
    }
    updateSlider();
});

// Optional: Keep the previous button functionality on large screens
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

if (prevButton && nextButton) {
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        updateSlider();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
        updateSlider();
    });
}
