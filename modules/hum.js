export const hum = () => {
    const nav = document.querySelector('.header-nav');
    const humButton = document.querySelector('.hum');
    const humGuide = document.querySelector('.hum-guide');

    function menuToggle() {
        humButton.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    }

    function menuTextToggle() {
        if (humGuide.textContent === 'open') {
            humGuide.textContent = 'close';
        } else {
            humGuide.textContent = 'open';
        }
    }

    function menuClose() {
        humButton.classList.remove('is-active');
        nav.classList.remove('is-active');
        humGuide.textContent = 'open';
    }

    humButton.addEventListener('click', () => {
        menuToggle();
        menuTextToggle();
    });

    nav.addEventListener('click', menuClose);
};