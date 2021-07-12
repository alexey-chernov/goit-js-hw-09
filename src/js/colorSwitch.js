import colors from '/colors';

const refs = {
    bodyEl: document.querySelector('body'),
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
};

refs.start.addEventListener('click', onStartBtnClick);
refs.stop.addEventListener('click', onStopBtnClick);

let timerId = null;

function onStartBtnClick() {
    refs.start.setAttribute('disabled', '');
    refs.start.classList.add('is-active');

    timerId = setInterval(() => {
        refs.bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
}

function onStopBtnClick() {
    clearInterval(timerId);
    refs.start.removeAttribute('disabled');
    refs.start.classList.remove('is-active');
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}