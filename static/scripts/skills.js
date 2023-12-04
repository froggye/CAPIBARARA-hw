'use strict';

const skillsData = [
    {
        img: 'static/img/icon-javscript.png',
        description: 'Javascript'
    },
    {
        img: 'static/img/icon-typescript.png',
        description: 'Typescript'
    },
    {
        img: 'static/img/icon-react.png',
        description: 'React'
    },
    {
        img: 'static/img/icon-nextjs.png',
        description: 'Next.js'
    },
    {
        img: 'static/img/icon-nodejs.png',
        description: 'Node.js'
    },
]

const skillsList = document.getElementById("skills-slider");

for (let i = 0; i < skillsData.length; ++i) {
    let li = document.createElement('li');
    li.classList.add('skills__slider-item');
    if (i >= 3) {
        li.classList.add('skills__slider-item--hide');
    }

    li.innerHTML =
        `<img src="${skillsData[i].img}">
        <p class="body1">
        ${skillsData[i].description}
        </p>`;
    skillsList.appendChild(li);
}