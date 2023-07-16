let testimonialItems = document.querySelectorAll('.testimonial__content');
let testimonialPrevArrow = document.querySelector('.testimonial__arrow.prev');
let testimonialNextArrow = document.querySelector('.testimonial__arrow.next');
let testimonialCurrentIndex = 0;

const slideTestimonial = () => {
    testimonialItems.forEach(item => {
        item.style.transform = `translateX(-${testimonialCurrentIndex * 100}%)`;
    })
}

testimonialPrevArrow.addEventListener('click', () => {
    if (testimonialCurrentIndex > 0) {
        testimonialCurrentIndex -= 1;
        slideTestimonial();
    }
})

testimonialNextArrow.addEventListener('click', () => {
    if (testimonialCurrentIndex < testimonialItems.length - 1) {
        testimonialCurrentIndex += 1;
        slideTestimonial();
    }
})