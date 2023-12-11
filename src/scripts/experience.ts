
let currentExperience: number = 0;
const experienceGrid = document.getElementById("experience-grid");

const expData: {
    date: string,
    title: string,
    list: string[] }[] = [
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

for (let i: number = 0; i < expData.length; ++i) {
    let date = document.createElement('button');
    date.className = 'body2 drop-shadow--md experience__date';
    date.dataset.order = String(i + 1);
    if (i === currentExperience) {
        date.classList.add('active');
    }

    const dateContent = document.createTextNode(expData[i].date);
    date.appendChild(dateContent);

    experienceGrid?.appendChild(date);
}

for (let i: number = 0; i < expData.length; ++i) {
    let card = document.createElement('div');
    card.className = 'drop-shadow--md experience__detailed-card';
    card.dataset.order = String(i + 1);
    if (i === currentExperience) {
        card.classList.add('active');
    }

    let content =
        `<img src="src/img/ws-logo.svg">
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

    experienceGrid?.appendChild(card);
}

const expButtons = document.getElementsByClassName("experience__date");
const expCards = document.getElementsByClassName("experience__detailed-card");

function changeExperience(this: HTMLButtonElement): void {
    const thisDataOrder: string = this.getAttribute('data-order');
    currentExperience = thisDataOrder - 1;

    for (let i: number = 0; i < expButtons.length; i++) {
        const dataOrder: string = expButtons[i].getAttribute('data-order');
        if ((dataOrder - 1) === currentExperience) {
            expButtons[i].classList.add('active');
            expCards[i].classList.add('active');
        }
        else {
            expButtons[i].classList.remove('active');
            expCards[i].classList.remove('active');
        }
    }
}

for (let i: number = 0; i < expButtons.length; i++) {
    expButtons[i]?.addEventListener('click', changeExperience);
}