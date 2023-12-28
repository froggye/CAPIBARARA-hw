
const Hero = () => (
    <section className="container hero">
        <div className="hero__text">
            <h1>
                Hi, I’m Capybarara&nbsp;&#128075;
            </h1>
            <p className="body2">
                Known for its adorable appearance and friendly nature, the Capybarara is now embarking on a journey
                to find a new job. Motivated by the desire to explore new opportunities and challenges, the Capybarara
                is determined to utilize its unique skills and traits to secure a fulfilling position!
            </p>
        </div>
        <a className="hero__button textbutton subtitle--semibold" href="#request-form">
            I WANNA EMPLOY YOU!!!!
        </a>
        <img className="hero__img" src="src/img/hero-pic.png"
             alt="My pic is supposed to be here"/>
        <img src="src/img/wave-bottom.svg" className="hero__wave-bottom"/>
        <img src="src/img/wave-oranges.svg" className="hero__wave-oranges"/>
        <img src="src/img/wave-top.svg" className="hero__wave-top"/>
    </section>
);

export default Hero;