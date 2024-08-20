const menuButton = document.querySelector('.menu-button');
const dropdownMenu = document.querySelector('.dropdown-menu');
const menuClose = document.querySelector('.menu-close');

menuButton.addEventListener('click', () => {
    dropdownMenu.classList.add('show');
    dropdownMenu.classList.remove('hide');
});

menuClose.addEventListener('click', () => {
    dropdownMenu.classList.add('hide');
    dropdownMenu.classList.remove('show');
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;
    const slideWidth = testimonials[0].offsetWidth + 20; // width + margin

    let index = 0;

    const updateSlidePosition = () => {
        container.style.transform = `translateX(-${index * slideWidth}px)`;
    };

    document.querySelector('.next').addEventListener('click', () => {
        if (index < totalTestimonials - 1) {
            index++;
            updateSlidePosition();
        } else {
            index = 0;
            updateSlidePosition();
        }
    });

    document.querySelector('.prev').addEventListener('click', () => {
        if (index > 0) {
            index--;
            updateSlidePosition();
        } else {
            index = totalTestimonials - 1;
            updateSlidePosition();
        }
    });

    // Automatic sliding every 5 seconds
    setInterval(() => {
        document.querySelector('.next').click();
    }, 5000);
});
