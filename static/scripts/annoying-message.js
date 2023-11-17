'use strict';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const messageContainer = document.querySelector('.annoying-message');

function messageOC () {
    messageContainer.classList.add('hidden');
    sleep(120000).then(() => { messageContainer.classList.remove('hidden'); });
}

const messageButton = document.getElementById("message-close");
messageButton.addEventListener("click", messageOC);


