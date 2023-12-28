import { useState, useRef } from "react";

const Contacts = () => {
    const mailRef = useRef(null);
    const phoneRef = useRef(null);

    const [isMailCopied, setIsMailCopied] = useState(false);
    const [isPhoneCopied, setIsPhoneCopied] = useState(false);

    const setColor = (text: string) => {
        const yellow: string = "#FFD600";
        const orange: string = "#F4900C";
        let space: number = 0;
        let newText = Array.from(text).map((letter, index) => {
            if (letter === ' ') {
                space++;
            }
            return (
                <span key={index} style={{color: ((index + space) % 2) ? orange : yellow}}>
                    {letter}
                </span>
            );
        });

        return newText;
    }

    return (
        <section className="container container--gray contacts" id="contacts">
            <div className="contacts__text">
                <h2 className="header1">
                    Get in touch
                </h2>
                <p className="subtitle">
                    What’s next? Feel free to reach out to Capibarara if you're looking for a developer,
                    have a query, or simply want to connect.
                </p>
            </div>
            <div className="contacts__info">
                <div className="contacts__row">
                    <img src="src/img/envelope-color.svg"/>
                    <a id="contact-mail" className={
                        isMailCopied
                            ? 'header2 copied'
                            : 'header2'
                    } ref={mailRef}
                       onClick={() => {
                           navigator.clipboard.writeText(mailRef.current.innerText);
                           setIsMailCopied(true);
                       }}
                       onAnimationEnd={() => setIsMailCopied(false)}>
                        {setColor('capibarara@gmail.com')}
                    </a>
                </div>
                <div className="contacts__row">
                    <img src="src/img/phone-color.svg"/>
                    <a id="contact-phone" className={
                        isPhoneCopied
                            ? 'header2 copied'
                            : 'header2'
                    } ref={phoneRef}
                       onClick={(e) => {
                           navigator.clipboard.writeText(phoneRef.current.innerText);
                           setIsPhoneCopied(true);
                       }}
                       onAnimationEnd={() => setIsPhoneCopied(false)}>
                        {setColor('+8 800 200-59-20')}
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contacts;