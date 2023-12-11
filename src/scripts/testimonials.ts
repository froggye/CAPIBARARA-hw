
let currentTestimonial: number = 0;

const tesData: {
    img: string,
    name: string,
    occupation: string,
    comment: string }[] = [
    {
        img: 'src/img/testimonials-1.png',
        name: 'Sarah',
        occupation: 'Frontend Developer',
        comment:
            `“I had the opportunity to see a Capibarara at the zoo, and it was such an incredible
            experience! They are such gentle creatures and so fascinating to watch. Their size and calm
            nature definitely make them unique among other animal species.”`
    },
    {
        img: 'src/img/testimonials-2.png',
        name: 'Jason',
        occupation: 'Manager',
        comment:
            `“I recently read about Capybarara and I must say, they are truly fascinating animals.
            Their social behavior and close-knit family structures are so interesting, and I love how
            they live in such harmony with other animals in their habitats. Definitely one of the most
            underrated animals out there!”`
    },
    {
        img: 'src/img/testimonials-3.png',
        name: 'Emma',
        occupation: 'Backend Developer',
        comment:
            `“I had the chance to interact with a Capybarara at a wildlife sanctuary, and it was
            such a memorable experience. They are extremely friendly and affectionate. I was surprised
            by how intelligent they are, and their level of comfort with humans. I would highly recommend
            anyone to see them up close!:”`
    },
    {
        img: 'src/img/testimonials-4.png',
        name: 'Megan',
        occupation: 'DevOps',
        comment:
            `“As an animal lover, I've always been fascinated by Capybarara. They are super social
            creatures and thrive in groups. It's amazing how they have adaptations that allow them to live
            both on land and in water. Their unique appearance and laid-back personality make them the perfect
            animal to admire!”`
    }
]

let tesList = document.getElementById("testimonials-grid");

for (let i: number = 0; i < tesData.length; ++i) {
    let li = document.createElement('div');
    li.className = 'testimonials__card drop-shadow--md';
    li.dataset.order = String(i + 1);
    if (i === currentTestimonial) {
        li.classList.add('active');
    }

    let content =
        `<div class="testimonials__card-head">
            <img src="${tesData[i].img}">
            <div class="testimonials__card-details">`;
    if (i === currentTestimonial) {
        content +=
            `        <h3 class="header3--semibold">${tesData[i].name}</h3>
                    <p class="subtitle">${tesData[i].occupation}</p>`;
    }
    else {
        content +=
            `        <h3 class="subtitle--semibold">${tesData[i].name}</h3>
                    <p class="body3">${tesData[i].occupation}</p>`;
    }
    content +=
        `    </div>
        </div>
        <p class="testimonials__comment body2">${tesData[i].comment}</p>`;
    li.innerHTML = content;
    tesList.appendChild(li);
}