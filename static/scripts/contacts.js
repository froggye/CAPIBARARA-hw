'use strict';

async function copyText (el) {
    const text = el.innerText;
    await navigator.clipboard.writeText(text);

    el.addEventListener('animationend', () => el.classList.remove('copied'), { once: true });
    el.classList.add('copied');
}

function isMobile () {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    return regexp.test(details) || window.innerWidth <= 768;
}

const mail = document.getElementById("contact-mail");
const phone = document.getElementById("contact-phone");

if (!isMobile()) {
    mail.href = "javascript:void(0)";
    mail.addEventListener("click", function(){
        void copyText(mail);
    });

    phone.href = "javascript:void(0)";
    phone.addEventListener("click", function(){
        void copyText(phone);
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

