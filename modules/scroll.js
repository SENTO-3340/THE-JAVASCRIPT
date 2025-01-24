export const scroll = () => {

    const textSpace = document.querySelector('.text-space');
    const backVideo = document.querySelector('.background-video');
    const innerText = document.querySelectorAll('.inner-text');

    const windowHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
        const textSpaceTop = textSpace.getBoundingClientRect().top;
        const textSpaceBottom = textSpace.getBoundingClientRect().bottom;

        const fadeoutTiming = 100;
        const fadeinSection = 0 >= textSpaceTop && textSpaceBottom >= fadeoutTiming;

        if (fadeinSection) {
            textSpace.classList.add('visible');
            backVideo.classList.add('visible');
        } else {
            textSpace.classList.remove('visible');
            backVideo.classList.remove('visible');
        }

        innerText.forEach((text) => {
            const textRect = text.getBoundingClientRect();
            if (windowHeight >= textRect.top) {
                text.classList.add('visible');
            } else {
                text.classList.remove('visible');
            }
        });
    });
};