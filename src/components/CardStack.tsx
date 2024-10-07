
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
    id: number;
    name: string;
    designation: string;
    content: React.ReactNode;
};

export const CardStack = ({
    items,
    offset,
    scaleFactor,
}: {
    items: Card[];
    offset?: number;
    scaleFactor?: number;
}) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState<Card[]>(items);

    useEffect(() => {
        startFlipping();

        return () => clearInterval(interval);
    }, []);
    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards]; // create a copy of the array
                newArray.unshift(newArray.pop()!); // move the last element to the front
                return newArray;
            });
        }, 5000);
    };

    return (
        <div className="relative  h-72 w-full sm:h-[20rem] lg:h-[20rem] lg:w-[60rem]">
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className="absolute  dark:bg-dark-blue h-72 w-full sm:h-[20rem] lg:h-[20rem] lg:w-[60rem] rounded-3xl p-9 shadow-2xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-1 flex-col justify-between"
                        style={{
                            transformOrigin: "top center",
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                            zIndex: cards.length - index, //  decrease z-index for the cards that are behind
                        }}
                    >
                        <div className="font-normal text-[0.9rem] sm:text-[1.1rem] text-neutral-700 dark:text-neutral-200">
                            {card.content}
                        </div>
                        <div>
                            <p className="text-neutral-500 text-xl font-medium dark:text-white">
                                {card.name}
                            </p>
                            <p className="text-neutral-400 text-[0.8rem] font-normal dark:text-neutral-200">
                                {card.designation}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
