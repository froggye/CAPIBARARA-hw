
const mail = document.getElementById("contact-mail");
const phone = document.getElementById("contact-phone");

function copyText (el: HTMLElement): void {
    if (el === undefined || el === null) {
        return;
    }
    const text: string = el.innerText;
    navigator.clipboard.writeText(text);

    el.addEventListener('animationend', () => el.classList.remove('copied'), { once: true });
    el.classList.add('copied');
}

function isMobile (): boolean {
    const details: string = navigator.userAgent;
    const regexp: RegExp = /android|iphone|kindle|ipad|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    return regexp.test(details) || window.matchMedia("(max-width: 768px)").matches;
}

if (!isMobile()) {
    mail?.setAttribute('href', '#');
    mail?.addEventListener("click", function(){
        copyText(mail);
    });

    phone?.setAttribute('href', '#');
    phone?.addEventListener("click", function(){
        copyText(phone);
    });
}
else {
    mail?.setAttribute('href', 'mailto:capibarara@gmail.com');
    phone?.setAttribute('href', 'tel:+88002005920');
}

const yellow: string = "#FFD600";
const orange: string = "#F4900C";
function setColor (el: HTMLElement): void {
    if (el === undefined || el === null) {
        return;
    }
    let str: string = el.textContent.trim();
    el.innerHTML = '';
    let space: number = 0;

    for (let j = 0; j < str.length; ++j) {
        let n = document.createElement('span');
        n.textContent = str[j];
        n.style.color = ((j + space) % 2) ? orange : yellow;
        if (str[j] === ' ') {
            space++;
        }
        el.appendChild(n);
    }
}

setColor(mail);
setColor(phone);