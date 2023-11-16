'use strict';

let skillsImages = [
    "static/img/icon-javscript.png",
    "static/img/icon-typescript.png",
    "static/img/icon-react.png",
    "static/img/icon-nextjs.png",
    "static/img/icon-nodejs.png"
];
let skillsDescr = [
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "Node.js"
];

let skillsList = document.getElementById("skills-slider");

for (let i = 0; i < skillsDescr.length; ++i) {
    let li = document.createElement('li');
    li.classList.add('skills__slider-item');
    if (i >= 3) {
        li.classList.add('skills__slider-item--hide');
    }

    li.innerHTML =
        '<img src="' + skillsImages[i] + '">' +
        '<p class="body1">' +
        skillsDescr[i] +
        '</p>';
    skillsList.appendChild(li);
}
