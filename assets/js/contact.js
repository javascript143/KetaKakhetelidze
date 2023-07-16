let formDivs = document.querySelectorAll('.contact__form-div');

formDivs.forEach(div => {
    div.querySelector('input').addEventListener('input', () => {
        if (div.querySelector('input').value !== '') {
            div.querySelector('label').classList.add('active');
        } else {
            div.querySelector('label').classList.remove('active');
        }
    })
})

const contactForm = document.querySelector('.contact__form');
const contactPopup = document.querySelector('.contact-popup');
const contactOverlay = document.querySelector('.contact-overlay');
const contactOkBtn = document.querySelector('.contact-ok-btn');

contactForm.addEventListener('submit', e => {
    e.preventDefault();

    contactPopup.classList.remove('hidden');
    contactOverlay.classList.remove('hidden');
});

contactOkBtn.addEventListener('click', () => {
    contactPopup.classList.add('hidden');
    contactOverlay.classList.add('hidden');
});