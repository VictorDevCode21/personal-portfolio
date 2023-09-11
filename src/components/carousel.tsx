import { useState, ReactNode } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface CarouselProps {
    children: ReactNode[];
}

export default function Carousel({ children }: CarouselProps) {
    const [start, setStart] = useState(0);

    const prev = () => setStart((start) => (start === 0 ? children.length - 1 : start - 1));
    const next = () => setStart((start) => (start === children.length - 1 ? 0 : start + 1));

    return (
        <div className="overflow-hidden">
            <div className="flex transition-transform ease-out duration-500">
                {[...children, children[0], children[1]].slice(start, start + 3)}
            </div>
            <div className="relative w-full flex items-center justify-between">
                <button
                    onClick={prev}
                    className="p-1 rounded-full shadow  text-gray-800 hover:bg-light-blue hover:text-black absolute bottom-32 left-0"
                >
                    <BsChevronLeft size={40} />
                </button>
                <button
                    onClick={next}
                    className="p-1 rounded-full shadow  text-gray-800 hover:bg-light-blue hover:text-black absolute bottom-32 right-0"
                >
                    <BsChevronRight size={40} />
                </button>
            </div>
        </div>
    );
}
