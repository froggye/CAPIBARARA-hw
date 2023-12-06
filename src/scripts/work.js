'use strict';

const workData = [
    {
        img: 'src/img/screenshot-work-facts.png',
        alt: 'visit capybarafacts.com!',
        title: 'Capybara Facts',
        body:
            `"This site provides detailed and accurate information about capybaras. It covers" +
             "various topics such as their habitat, physical characteristics, behavior, diet," +
             "and lifecycle. It may also include interesting facts and trivia about capybaras." +
             "The site aims to educate visitors who are interested in learning more about these" +
             "unique creatures"`,
        pills: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Tailwindcss",
            "Figma",
            "Storybook",
            "Git"
        ],
        link: 'https://capybarafacts.com'
    },
    {
        img: 'src/img/screenshot-work-tips.png',
        alt: 'visit capybaratips.com!',
        title: 'CapybaraTips',
        body:
            `"This website is dedicated to providing practical tips and guides on how to care for" +
             "capybaras as pets. It covers essential topics such as feeding and nutrition, housing" +
             "and environment setup, health and hygiene, socialization, and training. The site may" +
             "also include testimonials or experiences shared by capybara owners or experts. It" +
             "aims to assist individuals who are considering or already own capybaras as pets."`,
        pills: [
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Tailwindcss",
            "Figma",
            "Storybook",
            "Git"
        ],
        link: 'https://capybaratips.com'
    },
    {
        img: 'src/img/screenshot-work-guide.png',
        alt: 'visit whatiscapybara.com!',
        title: 'What Is Capybara',
        body:
        `"This site serves as a comprehensive introduction to capybaras for those who" +
         "are unfamiliar with the species. It covers basic information, such as the" +
         "capybara's classification, origin, and distinct features. It may include" +
         "images or illustrations to help readers visualize the animal. The site's main" +
         "objective is to provide a general overview for individuals seeking introductory" +
         "knowledge about capybaras."`,
        pills: [
            "React",
            "Typescript",
            "PostgreSQL",
            "Tailwindcss",
            "Figma",
            "Storybook",
            "Git"
        ],
        link: 'https://whatiscapybara.com'
    }
]

let workList = document.getElementById("work");

for (let i = 0; i < workData.length; ++i) {
    let li = document.createElement('li');
    li.className = 'work__card drop-shadow--md';

    let content =
        `<div class="work__screenshot">
            <img class="drop-shadow--lg"
                 src="${workData[i].img}"
                 alt="${workData[i].alt}">
        </div>
        <div class="work__info">
            <h6 class="subtitle--semibold">${workData[i].title}</h6>
            <p class="body2">${workData[i].body}</p>
            <div class="work__pills">`;
    for (const pill of workData[i].pills){
        content +=
            `    <span class="work__pill body3--medium">${pill}</span>`;
    }
    content +=
        `    </div>
            <a href="${workData[i].link}" target="_blank">
                <img src="src/img/link.svg" alt="${workData[i].link}">
            </a>
        </div>`;
    li.innerHTML = content;
    workList.appendChild(li);
}