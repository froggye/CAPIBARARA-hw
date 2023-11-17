'use strict';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const container = document.querySelector('.annoying-message');

function messageOC () {
    container.classList.add('hidden');
    sleep(120000).then(() => { container.classList.remove('hidden'); });
}

const messageButton = document.getElementById("message-close");
messageButton.addEventListener("click", messageOC);


