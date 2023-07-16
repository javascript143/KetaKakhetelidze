const subscribeForm = document.querySelector('.subscribe-form');
const subscribePopup = document.querySelector('.subscribe-popup');
const subscribeOverlay = document.querySelector('.subscribe-overlay');
const subscribeOkBtn = document.querySelector('.subscribe-ok-btn');

subscribeForm.addEventListener('submit', e => {
    e.preventDefault();

    subscribePopup.classList.remove('hidden');
    subscribeOverlay.classList.remove('hidden');
});

subscribeOkBtn.addEventListener('click', () => {
    subscribePopup.classList.add('hidden');
    subscribeOverlay.classList.add('hidden');
});