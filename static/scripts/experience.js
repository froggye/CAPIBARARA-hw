'use strict';

let currentExperience = 0;

let expDates = [
    "May 2020 - Present",
    "Dec 2019 - May 2020",
    "May 2019 - Dec 2019"
];
let expTitles = [
    "Middle Frontend Developer",
    "Junior Frontend Developer",
    "Frontend Trainee"
];
let expLists = [
    [
        " Collaborating with senior developers to enhance skills and learn new technologies",
        " Mentoring and providing guidance to junior frontend developers",
        " Optimizing the performance of web applications"
    ],
    [
        " Participating in code reviews and receiving feedback",
        " Collaborating with UI/UX designers to implement usability and accessibility enhancements"
    ],
    [
        " Testing and debugging features or code snippets"
    ]
];

let experienceGrid = document.getElementById("experience-grid");

for (let i = 0; i < expDates.length; ++i) {
    let date = document.createElement('div');
    date.classList.add('body2');
    date.classList.add('drop-shadow--md');
    date.classList.add('experience__date');
    date.dataset.order = i + 1;
    if (i === currentExperience) {
        date.classList.add('active');
    }

    const dateContent = document.createTextNode(expDates[i]);
    date.appendChild(dateContent);

    experienceGrid.appendChild(date);
}

for (let i = 0; i < expTitles.length; ++i) {
    let card = document.createElement('div');
    card.classList.add('drop-shadow--md');
    card.classList.add('experience__detailed-card');
    card.dataset.order = i + 1;
    if (i === currentExperience) {
        card.classList.add('active');
    }

    let content =
        '<img src="static/img/ws-logo.svg">' +
        '<div class="experience__details">' +
        '    <h6 class="subtitle--semibold">' +
        expTitles[i] +
        '    </h6>' +
        '    <ul class="body2">';
    for (const li of expLists[i]){
        content +=
            '<li>' + li + '</li>';
    }
    content +=
        '    </ul>' +
        '</div>';
    card.innerHTML = content;

    experienceGrid.appendChild(card);
}

const expButtons = document.getElementsByClassName("experience__date");
const expCards = document.getElementsByClassName("experience__detailed-card");

function changeExperience() {
    for(let i = 0; i < expButtons.length; i++) {
        if ((expButtons[i].dataset.order - 1) === currentExperience) {
            expButtons[i].classList.add('active');
            expCards[i].classList.add('active');
        }
        else {
            expButtons[i].classList.remove('active');
            expCards[i].classList.remove('active');
        }
    }
}


for(let i = 0; i < expButtons.length; i++) {
    expButtons[i].addEventListener('click', function(){
        currentExperience = this.dataset.order - 1;
        changeExperience();
    });
}
