'use strict';

let workImages = [
    "static/img/screenshot-work-facts.png",
    "static/img/screenshot-work-tips.png",
    "static/img/screenshot-work-guide.png"
];
let workAlts = [
    "visit capybarafacts.com!",
    "visit capybaratips.com!",
    "visit whatiscapybara.com!"
];
let workTitles = [
    "Capybara Facts",
    "CapybaraTips",
    "What Is Capybara"
];
let workBody = [
    "This site provides detailed and accurate information about capybaras. It covers" +
    "various topics such as their habitat, physical characteristics, behavior, diet," +
    "and lifecycle. It may also include interesting facts and trivia about capybaras." +
    "The site aims to educate visitors who are interested in learning more about these" +
    "unique creatures",
    "This website is dedicated to providing practical tips and guides on how to care for" +
    "capybaras as pets. It covers essential topics such as feeding and nutrition, housing" +
    "and environment setup, health and hygiene, socialization, and training. The site may" +
    "also include testimonials or experiences shared by capybara owners or experts. It" +
    "aims to assist individuals who are considering or already own capybaras as pets.",
    "This site serves as a comprehensive introduction to capybaras for those who" +
    "are unfamiliar with the species. It covers basic information, such as the" +
    "capybara's classification, origin, and distinct features. It may include" +
    "images or illustrations to help readers visualize the animal. The site's main" +
    "objective is to provide a general overview for individuals seeking introductory" +
    "knowledge about capybaras."
];
let workPills = [
    [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Storybook",
        "Git"
    ],
    [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Storybook",
        "Git"
    ],
    [
        "React",
        "Typescript",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Storybook",
        "Git"
    ]
];
let workLinks = [
    "https://capybarafacts.com",
    "https://capybaratips.com",
    "https://whatiscapybara.com"
];

let workList = document.getElementById("work");

for (let i = 0; i < workTitles.length; ++i) {
    let li = document.createElement('li');
    li.classList.add('work__card');
    li.classList.add('drop-shadow--md');

    let content =
        '<div class="work__screenshot">' +
        '    <img class="drop-shadow--lg"' +
        '         src="' + workImages[i] + '"' +
        '         alt="' + workAlts[i] + '">' +
        '</div>' +
        '<div class="work__info">' +
        '    <h6 class="subtitle--semibold">' +
        workTitles[i] +
        '    </h6>' +
        '    <p class="body2">' +
        workBody[i] +
        '    </p>' +
        '    <div class="work__pills">';
    for (const pill of workPills[i]){
        content +=
            '    <span class="work__pill body3--medium">' +
            pill +
            '    </span>';
    }
    content +=
        '    </div>' +
        '    <a href="' + workLinks[i] + '" target="_blank">' +
        '        <img src="static/img/link.svg" alt="' + workLinks[i] + '">' +
        '    </a>' +
        '</div>';
    li.innerHTML = content;
    workList.appendChild(li);
}