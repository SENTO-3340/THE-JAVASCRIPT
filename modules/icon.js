export const icon = () => {

    const iconImg = document.querySelector('.icon-img');
    const iconDes = document.querySelector('.icon-description');

    const button = {
        text: document.querySelector('.btn-text'),
        color: document.querySelector('.btn-color'),
        big: document.querySelector('.btn-big'),
        small: document.querySelector('.btn-small'),
        rotate: document.querySelector('.btn-rotate'),
    };

    const iconText = [
        'This is JavaScript icon!',
        'Wow!!',
        'Great!!!',
        'Amazing!!!!',
        'Oh my god!!!!!',
    ];

    const iconColor = ['#121212', 'gold', 'red', 'blue', 'green'];

    let textIndex = 0;
    iconDes.innerText = iconText[0];

    function textChanger() {
        textIndex = (textIndex + 1) % iconText.length;
        iconDes.innerText = iconText[textIndex];
    }

    let colorIndex = 0;
    iconDes.style.color = iconColor[0];

    function colorChanger() {
        colorIndex = (colorIndex + 1) % iconColor.length;
        iconDes.style.color = iconColor[colorIndex];
    }

    let magnification = 1;

    let angle = 0;

    function updateTransform() {
        iconImg.style.transform = `scale(${magnification}) rotate(${angle}deg)`;
    }

    function increaseTheMagnification() {
        if (magnification <= 1.4) {
            magnification = magnification + 0.2;
            updateTransform();
        } else {
            alert('ボタンが隠れちゃうよ');
        }
    }

    function decreaseTheMagnification() {
        if (magnification >= 0.6) {
            magnification = magnification - 0.2;
            updateTransform();
        } else {
            alert('消えちゃうよ');
        }
    }

    function angleChanger() {
        angle += 90;
        updateTransform();
    }

    button.text.addEventListener('click', textChanger);
    button.color.addEventListener('click', colorChanger);
    button.big.addEventListener('click', increaseTheMagnification);
    button.small.addEventListener('click', decreaseTheMagnification);
    button.rotate.addEventListener('click', angleChanger);
};