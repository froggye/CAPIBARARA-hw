import {useState} from "react";

const Testimonial = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(1)

    type tesDataProps = {
        id: number,
        img: string,
        name: string,
        occupation: string,
        comment: string
    }

    const tesData: tesDataProps[] = [
        {
            id: 1,
            img: 'src/img/testimonials-1.png',
            name: 'Sarah',
            occupation: 'Frontend Developer',
            comment:
                `“I had the opportunity to see a Capibarara at the zoo, and it was such an incredible
            experience! They are such gentle creatures and so fascinating to watch. Their size and calm
            nature definitely make them unique among other animal species.”`
        },
        {
            id: 2,
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
            id: 3,
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
            id: 4,
            img: 'src/img/testimonials-4.png',
            name: 'Megan',
            occupation: 'DevOps',
            comment:
                `“As an animal lover, I've always been fascinated by Capybarara. They are super social
            creatures and thrive in groups. It's amazing how they have adaptations that allow them to live
            both on land and in water. Their unique appearance and laid-back personality make them the perfect
            animal to admire!”`
        }
    ];

    return (
    <section className="container container--gray testimonials" id="testimonials">
        <div className="testimonials__text">
            <h2 className="header1">
                Testimonials
            </h2>
            <p className="subtitle">
                Nice things people have said about me:
            </p>
        </div>
        <div className="testimonials__grid" id="testimonials-grid">
            {tesData.map((data) => (
                <div className={
                    data.id === currentTestimonial
                        ? 'testimonials__card drop-shadow--md active'
                        : 'testimonials__card drop-shadow--md'
                } data-order={data.id} key={data.id}>
                    <div className="testimonials__card-head">
                        <img src={data.img}/>
                        <div className="testimonials__card-details">
                            <h3 className={
                                data.id === currentTestimonial
                                    ? 'header3--semibold'
                                    : 'subtitle--semibold'
                            }>{data.name}</h3>
                            <p className={
                                data.id === currentTestimonial
                                    ? 'subtitle'
                                    : 'body3'
                            }>{data.occupation}</p>
                        </div>
                    </div>
                    <p className="testimonials__comment body2">{data.comment}</p>
                </div>
            ))}
        </div>
    </section>
)}

export default Testimonial;