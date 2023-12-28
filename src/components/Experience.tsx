import { useState } from "react";

const Experience = () => {
    const [currentExperience, setCurrentExperience] = useState(1)

    type expButtonsProps = {
        id: number,
        name: string
    }

    const expButtons: expButtonsProps[] = [
        {
            id: 1,
            name: 'May 2020 - Present'
        },
        {
            id: 2,
            name: 'Dec 2019 - May 2020'
        },
        {
            id: 3,
            name: 'May 2019 - Dec 2019'
        }
    ];

    type expInfoProps = {
        id: number,
        title: string,
        list: string[]
    }

    const expInfo: expInfoProps[] = [
        {
            id: 1,
            title: 'Middle Frontend Developer',
            list: [
                ' Collaborating with senior developers to enhance skills and learn new technologies',
                ' Mentoring and providing guidance to junior frontend developers',
                ' Optimizing the performance of web applications'
            ]
        },
        {
            id: 2,
            title: 'Junior Frontend Developer',
            list: [
                ' Participating in code reviews and receiving feedback',
                ' Collaborating with UI/UX designers to implement usability and accessibility enhancements'
            ]
        },
        {
            id: 3,
            title: 'Frontend Trainee',
            list: [
                ' Testing and debugging features or code snippets'
            ]
        }
    ];

    return (
        <section className="container container--gray experience" id="experience">
            <div className="experience__text">
                <h2 className="header1">
                    Experience
                </h2>
                <p className="subtitle">
                    Here is a quick summary of Capibarara most recent experiences:
                </p>
            </div>
            <div className="experience__grid" id="experience-grid">
                {expButtons.map((data) => (
                    <button className={
                        data.id === currentExperience
                            ? 'body2 drop-shadow--md experience__date active'
                            : 'body2 drop-shadow--md experience__date'
                    } data-order={data.id} key={data.id} onClick={() => {setCurrentExperience(data.id)}}>
                        {data.name}
                    </button>
                ))}
                {expInfo.map((data) => (
                    <div className={
                        data.id === currentExperience
                            ? 'drop-shadow--md experience__detailed-card active'
                            : 'drop-shadow--md experience__detailed-card'
                    } data-order={data.id} key={data.id}>
                        <img src="src/img/ws-logo.svg"/>
                        <div className="experience__details">
                            <h6 className="subtitle--semibold">{data.title}</h6>
                            <ul className="body2">
                                {data.list.map((item) => (
                                    <li key={item}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );

}

export default Experience;