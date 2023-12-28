
const Skills = () => {
    type skillsDataProps = {
        img: string,
        description: string
    }

    const skillsData: skillsDataProps[] = [
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
    ];

    return (
    <section className="container skills">
        <div className="skills__text">
            <h2 className="header1">
                Skills
            </h2>
            <p className="subtitle">
                The skills, tools and technologies Capybarara is really good at:
            </p>
        </div>
        <ul className="skills__slider" id="skills-slider">
            {skillsData.map((data) => (
                <li className="skills__slider-item" key={data.description}>
                    <img src={data.img}/>
                    <p className="body1">
                        {data.description}
                    </p>
                </li>
                )
            )}
        </ul>
    </section>
)}

export default Skills;