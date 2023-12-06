'use strict';

const skillsData = [
    {
        img: 'src/img/icon-javscript.png',
        description: 'Javascript'
    },
    {
        img: 'src/img/icon-typescript.png',
        description: 'Typescript'
    },
    {
        img: 'src/img/icon-react.png',
        description: 'React'
    },
    {
        img: 'src/img/icon-nextjs.png',
        description: 'Next.js'
    },
    {
        img: 'src/img/icon-nodejs.png',
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