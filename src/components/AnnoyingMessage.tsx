import { useState } from "react";

const AnnoyingMessage = () => {
    const [isHidden, setIsHidden] = useState(false);

    const minutes2: number = 120000;

    const sleep = (ms) => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const handleClick = (event) => {
        setIsHidden(true);
        sleep(minutes2).then(() => {
            setIsHidden(false);
        });
    }

    return (
        <div className={
            isHidden
                ? 'annoying-message hidden'
                : 'annoying-message'
        }>
            <img className="annoying-message__image" src="src/img/annoying-message.png"/>
            <button id="message-close" className="annoying-message__button" onClick={handleClick}></button>

        </div>
    );
}

export default AnnoyingMessage;