
const minutes2: number = 120000;
const messageContainer = document.querySelector('.annoying-message');
const messageButton = document.getElementById('message-close');

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

messageButton?.addEventListener("click", () => {
    messageContainer?.classList.add('hidden');
    sleep(minutes2).then(() => {
        messageContainer?.classList.remove('hidden');
    });
});
