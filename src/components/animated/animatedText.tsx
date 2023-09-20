import { useEffect, useState } from "react";

interface AnimatedTextProps {
    text: string;
}

const AnimatedText = ({ text }: AnimatedTextProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [fullText, setFullText] = useState(text);

    useEffect(() => {
        const interval = setInterval(() => {
            if (fullText.length > 0) {
                setDisplayedText((prev) => prev + fullText[0]);
                setFullText((prev) => prev.slice(1));
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [fullText]);

    return <h1 className="text-white text-3xl font-bold lg:pl-32 xs:pl-4 pb-4">{displayedText}</h1>;
};

export default AnimatedText;
