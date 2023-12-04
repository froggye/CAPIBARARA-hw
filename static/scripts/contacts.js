'use strict';

function copyText (el) {
    const text = el.innerText;
    navigator.clipboard.writeText(text);

    el.addEventListener('animationend', () => el.classList.remove('copied'), { once: true });
    el.classList.add('copied');
}

function isMobile () {
    const details = navigator.userAgent;
    const regexp = /android|iphone|kindle|ipad|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    return regexp.test(details) || window.matchMedia("(max-width: 768px)").matches;
}

const mail = document.getElementById("contact-mail");
const phone = document.getElementById("contact-phone");

if (!isMobile()) {
    mail.href = "#";
    mail.addEventListener("click", function(){
        copyText(mail);
    });

    phone.href = "#";
    phone.addEventListener("click", function(){
        copyText(phone);
    });
}
else {
    mail.href = "mailto:capibarara@gmail.com";
    phone.href = "tel:+88002005920";
}

const yellow = "#FFD600";
const orange = "#F4900C";
function setColor (el) {
    let str = el.textContent.trim();
    el.innerHTML = '';
    let space = 0;

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