"use client"

import React, { useRef } from "react";
import {useScroll, motion, useTransform} from 'framer-motion';

export default function Paragraph({value}) {

    const element = useRef(null);

    // Using useScroll from framer motion to track user's scroll Y axis
    const {scrollYProgress} = useScroll({
        // Target the text paragraph
        target: element,
        // Setting up where to start and to end the animation on the scroll Y axis
        offset: ['start 0.10', 'start -0.25']
    })

    // Making an array out of the paragraph input
    const words = value.split(" ");

    return (
        <h1
            // Styling of the paragraph
            className="text-3xl text-center flex flex-wrap justify-center leading-[30px] pt-10 pb-6 lg:text-4xl "
            ref={element}
        >
            {
                words.map((word, i) => {
                    // Setting up where to start and to end the animation from the first word to the last (Y axis goes from 0 to 1)
                    const start = (i / words.length)
                    const end = start + (1 / words.length)
                    return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
                })
            }
        </h1>
    )
}

const Word = ({children, range, progress}) => {
    const characters = children.split("");
    const amount = range[1] - range[0];
    const step = amount / children.length;
    return (
        // Styling of the words (Spaces)
        <p className="mr-4 mt-4 relative">
            {characters.map( (character, i) => {
                // Adapting the start and end from the words to the letters
                const start = range[0] + (step * i);
                const end = range[0] + (step * (i+ 1));
                return <Character key={i} range={[start, end]} progress={progress}>{character}</Character>
            })}
        </p>
    )
}

const Character = ({children, range, progress}) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span>
            <span
                // Shadow before the letters appears
                className="absolute opacity-60">
                    {children}
            </span>
            <motion.span style={{opacity}}>
                {children}
            </motion.span>
        </span>
    )
}