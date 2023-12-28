
const Work = () => {
    type workDataProps = {
        img: string,
        alt: string,
        title: string,
        body: string,
        pills: string[],
        link: string
    }

    const workData: workDataProps[] = [
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
    ];

    return (
        <section className="container work" id="work">
            <div className="work__text">
                <h2 className="header1">
                    Work
                </h2>
                <p className="subtitle">
                    Some of the noteworthy projects Capibarara have built:
                </p>
            </div>
            {workData.map((data) => (
                    <li className="work__card drop-shadow--md" key={data.title}>
                        <div className="work__screenshot">
                            <img className="drop-shadow--lg"
                                 src={data.img}
                                 alt={data.alt}/>
                        </div>
                        <div className="work__info">
                            <h6 className="subtitle--semibold">{data.title}</h6>
                            <p className="body2">{data.body}</p>
                            <div className="work__pills">
                                {data.pills.map((pill) => (
                                <span key={pill} className="work__pill body3--medium">
                                    {pill}
                                </span>
                                ))}
                            </div>
                            <a href={data.link} target="_blank">
                                <img src="src/img/link.svg" alt={data.link}/>
                            </a>
                        </div>
                    </li>
                )
            )}
        </section>
    )
}

export default Work;