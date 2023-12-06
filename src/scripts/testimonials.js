'use strict';

let currentTestimonial = 0;

let tesImages = [
    "src/img/testimonials-1.png",
    "src/img/testimonials-2.png",
    "src/img/testimonials-3.png",
    "src/img/testimonials-4.png"
];
let tesNames = [
    "Sarah",
    "Jason",
    "Emma",
    "Megan"
];
let tesOccupation = [
    "Frontend Developer",
    "Manager",
    "Backend Developer",
    "DevOps"
];
let tesComments = [
    "“I had the opportunity to see a Capibarara at the zoo, and it was such an incredible experience!" +
    "They are such gentle creatures and so fascinating to watch. Their size and calm nature definitely" +
    "make them unique among other animal species.”",
    "“I recently read about Capybarara and I must say, they are truly fascinating animals. Their social" +
    "behavior and close-knit family structures are so interesting, and I love how they live in such" +
    "harmony with other animals in their habitats. Definitely one of the most underrated animals" +
    "out there!”",
    "“I had the chance to interact with a Capybarara at a wildlife sanctuary, and it was such" +
    "a memorable experience. They are extremely friendly and affectionate. I was surprised by how" +
    "intelligent they are, and their level of comfort with humans. I would highly recommend anyone" +
    "to see them up close!:”",
    "“As an animal lover, I've always been fascinated by Capybarara. They are super social creatures" +
    "and thrive in groups. It's amazing how they have adaptations that allow them to live both on land" +
    "and in water. Their unique appearance and laid-back personality make them the perfect animal" +
    "to admire!”"
];

let tesList = document.getElementById("testimonials-grid");

for (let i = 0; i < tesNames.length; ++i) {
    let li = document.createElement('div');
    li.className = 'testimonials__card drop-shadow--md';
    li.dataset.order = i + 1;
    if (i === currentTestimonial) {
        li.classList.add('active');
    }

    let content =
        `<div class="testimonials__card-head">
            <img src="${tesImages[i]}">
            <div class="testimonials__card-details">`;
    if (i === currentTestimonial) {
        content +=
            `        <h3 class="header3--semibold">${tesNames[i]}</h3>
                    <p class="subtitle">${tesOccupation[i]}</p>`;
    }
    else {
        content +=
            `        <h3 class="subtitle--semibold">${tesNames[i]}</h3>
                    <p class="body3">${tesOccupation[i]}</p>`;
    }
    content +=
        `    </div>
        </div>
        <p class="testimonials__comment body2">${tesComments[i]}</p>`;
    li.innerHTML = content;
    tesList.appendChild(li);
}