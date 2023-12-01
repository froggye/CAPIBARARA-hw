'use strict';

let currentExperience = 0;

const expData = [
    {
        date: 'May 2020 - Present',
        title: 'Middle Frontend Developer',
        list: [
            ' Collaborating with senior developers to enhance skills and learn new technologies',
            ' Mentoring and providing guidance to junior frontend developers',
            ' Optimizing the performance of web applications'
        ]

    },
    {
        date: 'Dec 2019 - May 2020',
        title: 'Junior Frontend Developer',
        list: [
            ' Participating in code reviews and receiving feedback',
            ' Collaborating with UI/UX designers to implement usability and accessibility enhancements'
        ]

    },
    {
        date: 'May 2019 - Dec 2019',
        title: 'Frontend Trainee',
        list: [
            ' Testing and debugging features or code snippets'
        ]

    }
];

const experienceGrid = document.getElementById("experience-grid");

for (let i = 0; i < expData.length; ++i) {
    let date = document.createElement('button');
    date.className = 'body2 drop-shadow--md experience__date';
    date.dataset.order = i + 1;
    if (i === currentExperience) {
        date.classList.add('active');
    }

    const dateContent = document.createTextNode(expData[i].date);
    date.appendChild(dateContent);

    experienceGrid.appendChild(date);
}

for (let i = 0; i < expData.length; ++i) {
    let card = document.createElement('div');
    card.className = 'drop-shadow--md experience__detailed-card';
    card.dataset.order = i + 1;
    if (i === currentExperience) {
        card.classList.add('active');
    }

    let content =
        `<img src="static/img/ws-logo.svg">
        <div class="experience__details">
            <h6 class="subtitle--semibold">${expData[i].title}</h6>
            <ul class="body2">`;
    for (const li of expData[i].list){
        content +=
            `<li>${li}</li>`;
    }
    content +=
        `    </ul> 
        </div>`;
    card.innerHTML = content;

    experienceGrid.appendChild(card);
}

const expButtons = document.getElementsByClassName("experience__date");
const expCards = document.getElementsByClassName("experience__detailed-card");

function changeExperience() {
    for (let i = 0; i < expButtons.length; i++) {
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


for (let i = 0; i < expButtons.length; i++) {
    expButtons[i].addEventListener('click', function(){
        currentExperience = this.dataset.order - 1;
        changeExperience();
    });
}