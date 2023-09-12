import { useEffect, useState } from "react";

interface AnimatedTextProps {
    text: string;
}

const AnimatedText2 = ({ text }: AnimatedTextProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [fullText, setFullText] = useState(text);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (start) {
            const interval = setInterval(() => {
                if (fullText.length > 0) {
                    setDisplayedText((prev) => prev + fullText[0]);
                    setFullText((prev) => prev.slice(1));
                } else {
                    clearInterval(interval);
                }
            }, 50);

            return () => clearInterval(interval);
        }
    }, [fullText, start]);

    useEffect(() => {
        const delayTimeout = setTimeout(() => {
            setStart(true);
        }, 2600);

        return () => {
            clearTimeout(delayTimeout);
        };
    }, []);

    return <h2 className="text-white text-lg font-medium pl-32 ">{displayedText}</h2>;
};

export default AnimatedText2;
